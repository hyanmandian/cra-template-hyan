import request from '../request';

export default {
  randomImage: () => request.get('https://dog.ceo/api/breeds/image/random'),
};
