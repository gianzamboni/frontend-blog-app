export class Song {
  constructor(data) {
    this.artist_id = data.artist_id;
    this.id = data.id;
    this.title = data.title;
    this.duration = data.duration;
  }
}
