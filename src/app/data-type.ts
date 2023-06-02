export interface SignUp{
    name:String,
    email:String,
    password:String 
}

export interface Login{    
    email:String,
    password:String 
}

export interface AddProductModel{    
    name:String,
    color:String 
    category:String 
    description:String 
    imageUrl:String 
    price:String 
}

export interface ProductModel{    
    id:string
    name:String,
    color:String 
    category:String 
    description:String 
    imageUrl:String 
    price:String 
}