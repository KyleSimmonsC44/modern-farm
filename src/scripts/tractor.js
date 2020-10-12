import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"

export const plantSeeds= (yearsPlan) => {
   for (const planArray of yearsPlan){
       for (const planObj of planArray){
           if (planObj ==="asparagus"){
               addPlant(createAsparagus())
           } else if (planObj ==="potato"){
               addPlant(createPotato())
           } else if (planObj === "soybean"){
               addPlant(createSoybean())
            } else if (planObj === "sunflower"){
               addPlant(createSunflower()) 
           } else if (planObj === "wheat"){
               addPlant(createWheat())
           } else if (planObj === "corn"){
               addPlant(createCorn())
           }
       }
   }
}