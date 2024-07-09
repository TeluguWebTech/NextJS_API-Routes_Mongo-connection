import { DBconnection } from "@/app/utils/config/db";
import LaptopModel from "@/app/utils/models/Laptop";
import { NextResponse } from "next/server";


const ConnectDB = async()=>{
    await DBconnection()
}

ConnectDB()

export async function GET(){
    const laptopData = await LaptopModel.find({})
    return NextResponse.json({laptopData})
}

export async function POST(request){
        const {name, laptopmodel, laptopprice} = await request.json()

        await LaptopModel.create({
            name, laptopmodel, laptopprice
        })

        return NextResponse.json({msg:"Laptop added successfully"})
}