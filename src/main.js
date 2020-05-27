import '../source/style.scss';
import PageController from "@controllers/page-controller";
import OpinionsModel from "@models/opinions"
import {generateOpinions} from "@components/MOCK";
import {OpinionCount} from "./consts";

const opinionsModel = new OpinionsModel();
opinionsModel.parse(generateOpinions(OpinionCount.ALL));

const pageController = new PageController(opinionsModel);
pageController.render();

