import { ImportType } from '../types/index';

const handleDefaultModelSource = (importType: ImportType) => {
  let modelSource;
  switch (importType) {
    case 'complete':
      modelSource = 'https://oml-api.tj520.top/Pio/animal-02/index.json';
      break;
    case 'cubism2':
      modelSource = 'https://oml-api.tj520.top/Pio/animal-02/index.json';
      break;
    case 'cubism4':
      modelSource = 'https://oml-api.tj520.top/m950a_4302/normal/normal.model3.json';
      break;
    default:
      modelSource = 'https://oml-api.tj520.top/Pio/animal-02/index.json';
      break;
  }
  return modelSource;
};
export { handleDefaultModelSource };
