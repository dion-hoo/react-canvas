export class CreateImage {
  constructor() {
    this.image = new Image();
    this.image.src = "../../../assets/img/image05.png";
    this.isLoad = false;

    this.loaded();
  }

  loaded() {
    this.image.onload = () => {
      this.isLoad = true;
    };
  }

  draw(ctx, cx, cy) {
    ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      cx - 25,
      cy - 50,
      50,
      50
    );
  }
}
