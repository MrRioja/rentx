import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Description car 1",
      brand: "Brand car 1",
      category_id: "Category car 1",
      daily_rate: 110.0,
      fine_amount: 40,
      license_plate: "ASD-4511",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Description car 1",
      brand: "Car_brand_test",
      category_id: "Category car 1",
      daily_rate: 110.0,
      fine_amount: 40,
      license_plate: "ASD-4511",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Test Car 1",
      description: "Description car 1",
      brand: "Brand car 1",
      category_id: "Category car 1",
      daily_rate: 110.0,
      fine_amount: 40,
      license_plate: "ASD-4511",
    });

    const cars = await listAvailableCarsUseCase.execute({ name: "Test Car 1" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Description car 1",
      brand: "Brand car 1",
      category_id: "Category car 1 Test",
      daily_rate: 110.0,
      fine_amount: 40,
      license_plate: "ASD-4511",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "Category car 1 Test",
    });

    expect(cars).toEqual([car]);
  });
});
