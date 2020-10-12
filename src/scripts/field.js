const allThePlants = []
export const addPlant = (seedObj) =>{
    if (Array.isArray(seedObj) === true){
        seedObj.forEach(element => {
            allThePlants.push(element)
        });
    } else {
        allThePlants.push(seedObj)
    }
}
export const usePlants = () =>{
    return allThePlants.slice()
}