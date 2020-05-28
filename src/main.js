import '../source/style.scss';
import PageController from "@controllers/page-controller";
import OpinionsModel from "@models/opinions"
import {generateOpinions, generatePhotos} from "@components/MOCK";
import {OpinionCount} from "@consts";
import PhotosModel from "@models/photos";
import PhotoController from "@controllers/photo-controller";
import UploadController from "@controllers/upload-controller";

const opinionsModel = new OpinionsModel();
opinionsModel.parse(generateOpinions(OpinionCount.ALL));

const photosModel = new PhotosModel();
photosModel.parse(generatePhotos(6));

const pageController = new PageController(opinionsModel);
pageController.render();

const photoController = new PhotoController(photosModel);
photoController.render();

const uploadController = new UploadController();
uploadController.render();
