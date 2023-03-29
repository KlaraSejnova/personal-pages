import * as $ from "jquery";
import * as img from "../data/ImageData";
import * as ts from "../data/TextStyles";
import * as cont from "../data/Content";
import { applyTextStyle } from "../utils/TextStyleUtils";
import { AssetManager } from "../managers/AssetManager";
import { BucketContainer } from "../containers/BucketContainer";
import { HorizontalDivide } from "../containers/HorizontalDivide";
import { Margin } from "../utils/Margin";
import "createjs";

/*****************************************************************************/
export class FrontPage extends createjs.Container {
  //===== VARIABLES ======================================//
  private logo: createjs.Bitmap;
  private headline: createjs.Text;
  private body: createjs.Text;
  private div: HorizontalDivide;
  private divBuckets: Array<BucketContainer>;
  private overlayImage: createjs.Bitmap;
  private divStars: Array<createjs.Bitmap> = [];
  private _width: number;
  private _height: number;

  //===== CONSTRUCTOR ====================================//
  constructor() {
    super();

    this._width = -1;
    this._height = -1;

    $("[name=stars]").on("change", (e: Event) => this.onNumStarsChange(e));
    $("[name=overlay]").on("change", (e: Event) => this.onOverlayChange(e));

    this.addElements();
    this.addOverlay();
    this.putDefaultContent();
    this.updateStars();
  }

  //===== FUNCTIONS ======================================//
  /**
   * Instantiate elements and add them to the container.
   */
  addElements(): void {
    // Logo
    this.logo = new createjs.Bitmap(this.am.getAsset(img.LOGO.id));
    this.addChild(this.logo);

    // Headline
    this.headline = new createjs.Text();
    applyTextStyle(this.headline, ts.HEADLINE);
    this.addChild(this.headline);

    // Body
    this.body = new createjs.Text();
    applyTextStyle(this.body, ts.BODY);
    this.addChild(this.body);

    // Divide
    this.div = new HorizontalDivide();
    this.addChild(this.div);

    // Bucket
    const bucketWidth: number = 190;
    const bucketGap: number = 18;

    this.divBuckets = [
      new BucketContainer(img.IMAGE_0, cont.CONTENT_0, 0, 20, 1),
      new BucketContainer(
        img.IMAGE_1,
        cont.CONTENT_1,
        bucketWidth + bucketGap,
        20,
        1
      ),
      new BucketContainer(
        img.IMAGE_2,
        cont.CONTENT_2,
        2 * (bucketWidth + bucketGap),
        20,
        1
      ),
    ];

    this.divBuckets.forEach((bucket) => this.addChild(bucket));
  }

  /**
   * Adds an overlay of the desired end result.  Aids developer in ensuring
   * design has been match adequarely.
   */

  addOverlay(): void {
    this.overlayImage = new createjs.Bitmap(this.am.getAsset(img.OVERLAY.id));
    this.overlayImage.alpha = 0.5;
    this.overlayImage.visible = $("[name=overlay]")[0].checked;
    this.addChild(this.overlayImage);
  }

  /**
   * Set default content for elements.
   */
  putDefaultContent(): void {
    // Headline
    this.headline.text = "Creating Lasting Partnerships";

    // Body
    this.body.text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere est sodales est lobortis interdum. Cras a turpis ullamcorper elit dignissim mattis. Mauris dignissim aliquet est, vel vestibulum nisi fermentum vel. Fusce sit amet dolor eu tellus tincidunt pellentesque et vitae mauris. Praesent convallis magna sem. Sed vel mi nunc. In porta justo urna, ac tristique mauris lobortis et. Nam imperdiet lacinia augue eu vehicula. Duis nec consequat libero. Aenean et sapien volutpat, ultricies ante sit amet, ornare leo. Proin orci felis, lacinia ac commodo vitae, suscipit eget ipsum. Sed egestas justo non dolor molestie, eu iaculis enim lobortis. Suspendisse id ipsum vel lectus luctus viverra. Donec quam neque, fringilla quis justo sagittis, malesuada vestibulum leo. Nam eget lorem at elit vestibulum molestie nec quis est.";
  }

  /**
   * Size and position elements and update the CreateJS stage.
   * This should be called whenever the layout changes.
   */
  updateSizeProperties(): void {
    // Margin
    const m: Margin = new Margin(48, 36, 60, 36);

    // Logo
    const logoWidth: number = 116;
    const logoScale: number = logoWidth / img.LOGO.width;

    this.logo.x = this.width - logoWidth - 36;
    this.logo.y = 48;
    this.logo.scaleX = 0.2;
    this.logo.scaleY = 0.2;

    // Headline
    this.headline.x = m.left;
    this.headline.y = 113;
    this.headline.lineWidth = this.width - m.horizontal;

    // Body
    this.body.x = m.left;
    this.body.y = 162;
    this.body.lineWidth = this.width - m.horizontal;

    // Divide
    this.div.x = m.left + 161;
    this.div.y = 388;

    // Update Stage
    if (this.stage) this.stage.update();
  }

//   show desired number of stars at the bottom of the pgae
  private updateStars(numberStars: number = 4) {
    let xPos: number = 0;

    this.divStars.forEach((element) => {
      this.removeChild(element);
    });

    this.divStars = [];

    for (var i = 0; i < numberStars; i++) {
      var divStars = new createjs.Bitmap(this.am.getAsset(img.STAR.id));
      divStars.x = 608 - xPos;
      divStars.y = 868;
      xPos += img.STAR.width + 10;
      this.divStars.push(divStars);
    }

    this.divStars.forEach((element) => {
      this.addChild(element);
    });

    this.updateSizeProperties();
  }
 //===== EVENT LISTENERS ================================//
  private onNumStarsChange(e: Event = null) {
    let numberStars: number = Number(
      (e.currentTarget as HTMLInputElement).value
    );
    this.updateStars(numberStars);
  }

  private onOverlayChange(e: Event = null) {
    this.overlayImage.visible = (e.currentTarget as HTMLInputElement).checked;
    this.updateSizeProperties();
  }

  //===== GETTERS / SETTERS ==============================//
  get width(): number {
    return this._width;
  }
  set width(value: number) {
    this._width = value;
    this.updateSizeProperties();
  }

  get height(): number {
    return this._height;
  }
  set height(value: number) {
    this._height = value;
    this.updateSizeProperties();
  }

  //===== CONVENIENCE ====================================//
  private get am(): AssetManager {
    return AssetManager.instance;
  }
}
