import "./styles.css";
import { mainPageLoad } from "./initialLoad";
import { pullfromLocalStorage } from "./todoLogic";

pullfromLocalStorage();
mainPageLoad();