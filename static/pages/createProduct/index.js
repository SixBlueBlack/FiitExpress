async function CreateProduct(){
    document.body.prepend(await Header());
    document.body.append(CreateProductForm())
    document.body.append(await Footer());
}

CreateProduct();
