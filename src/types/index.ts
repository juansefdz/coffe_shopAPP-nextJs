import { Product,OrderProduct,Order } from "@prisma/client";

export type OrderItem= Pick<Product, 'id'|'name' |'price' > &{
    quantity: number
    subtotal: number
}

export type OrderWithProducts=Order &{
    orderProducts: (OrderProduct &{
        product:Product
    })[]
}