/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

Request {
    animal: "cat" | "dog"| "bird",
    breed: string,
    sterilized?: string

}

Response #1
{
    status: "available",
    data: {
        animal: "cat" | "dog"| "bird",
        breed: string,
        sterilized?: string,
        location: string,
        age?: number,
    }
}

Response #2
{
    status: "not available",
    data: {
        message: string,
        nextUpdateIn: Date
    }
}


function checkAnimalData(){
    if("available"){
        return data
    } else {
        return "not found"
    }
}