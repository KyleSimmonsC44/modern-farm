const allThePlants = []
export const addPlant = (seedObj) =>{
    allThePlants.push(seedObj)
}
export const usePlants = () =>{
    return allThePlants.slice()
}