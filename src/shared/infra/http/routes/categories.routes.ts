import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

const uploadAvatar = multer(uploadConfig.upload("./tmp"));

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  uploadAvatar.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
