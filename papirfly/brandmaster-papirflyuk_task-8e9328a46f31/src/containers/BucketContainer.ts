import * as img from "../data/ImageData";
import * as cont from "../data/Content";
import * as ts from "../data/TextStyles";
import { Margin } from "../utils/Margin";
import { applyTextStyle } from "../utils/TextStyleUtils";
import { AssetManager } from "../managers/AssetManager";
import "createjs";

/*****************************************************************************/
/**
 * Creates a reusable column block with image, title and text
 */

export class BucketContainer extends createjs.Container {
  private bucketImage: createjs.Bitmap;
  private bucketHeading: createjs.Text;
  private bucketBody: createjs.Text;
  private image: img.IImageData;
  private content: cont.ITextContent;

  constructor(
    image: img.IImageData | null,
    content: cont.ITextContent,
    x = 0,
    y = 0,
    scaleX = 0
  ) {
    super();
    this.x = Number(x);
    this.y = Number(y);
    this.scaleY = Number(scaleX);
    this.image = image;
    this.content = content;
    this.addElements();
    this.putDefaultContent();
    this.updateSizeProperties();
  }
  addElements(): void {
    // Bucket Image
    this.bucketImage = new createjs.Bitmap(this.am.getAsset(this.image.id));
    this.addChild(this.bucketImage);

    // Bucket Header
    this.bucketHeading = new createjs.Text(this.content.headline);
    applyTextStyle(this.bucketHeading, ts.BUCKET_HEADLINE);
    this.addChild(this.bucketHeading);

    // Bucket Body
    this.bucketBody = new createjs.Text(this.content.bodyContent);
    applyTextStyle(this.bucketBody, ts.BUCKET_BODY);
    this.addChild(this.bucketBody);
  }
  updateSizeProperties(): void {
    // Margin
    const m: Margin = new Margin(48, 36, 60, 36);
    // Image
    const bucketWidth: number = 190;
    const imageData: img.IImageData | null = img.getImageDataById(
      this.image.id
    );
    const imageScale: number = imageData ? bucketWidth / imageData.width : 1;

    this.bucketImage.x = m.left;
    this.bucketImage.y = 412;
    this.bucketImage.scaleX = imageScale;
    this.bucketImage.scaleY = imageScale;

    // Header
    this.bucketHeading.x = m.left;
    this.bucketHeading.y = this.bucketImage.y + 146;
    this.bucketHeading.lineWidth = bucketWidth;

    // Body
    this.bucketBody.x = m.left;
    this.bucketBody.y = this.bucketImage.y + 175;
    this.bucketBody.lineWidth = bucketWidth;
  }
  putDefaultContent(): void {
    this.bucketImage.image = this.am.getAsset(this.image.id);
    this.bucketHeading.text = this.content.headline;
    this.bucketBody.text = this.content.bodyContent;
  }

  //===== CONVENIENCE ====================================//
  private get am(): AssetManager {
    return AssetManager.instance;
  }
}
