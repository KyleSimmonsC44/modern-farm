console.log("Welcome to the main module")
import { createPlan } from './plan.js'
const yearlyPlan = createPlan()
console.log(yearlyPlan)

import {usePlants} from './field.js'
const test = usePlants()
console.log(test)