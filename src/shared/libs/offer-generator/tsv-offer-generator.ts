import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import { getRandomItem, getRandomItems } from '../../helpers/index.js';

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.title);
    const description = getRandomItem<string>(this.mockData.description);
    const publishedDate = getRandomItem<string>(this.mockData.publishedDate);
    const city = getRandomItem<string>(this.mockData.city);
    const previewImage = getRandomItem<string>(this.mockData.previewImage);
    const photos = getRandomItems<string>(this.mockData.photos).join(';');
    const isPremium = getRandomItem<boolean>(this.mockData.isPremium);
    const isFavorite = getRandomItem<boolean>(this.mockData.isFavorite);
    const rating = getRandomItem<number>(this.mockData.rating).toString();
    const type = getRandomItem<string>(this.mockData.type);
    const bedrooms = getRandomItem<number>(this.mockData.bedrooms).toString();
    const maxAdults = getRandomItem<number>(this.mockData.maxAdults).toString();
    const price = getRandomItem<number>(this.mockData.price).toString();
    const goods = getRandomItems<string>(this.mockData.goods).join(';');
    const host = getRandomItem<string>(this.mockData.host).toString();
    const commentsCount = getRandomItem<number>(this.mockData.commentsCount).toString();
    const latitude = getRandomItem<number>(this.mockData.latitude).toString();
    const longitude = getRandomItem<number>(this.mockData.longitude).toString();

    return [
      title, description, publishedDate, city, previewImage, photos, isPremium, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, commentsCount, latitude, longitude
    ].join('\t');
  }
}
