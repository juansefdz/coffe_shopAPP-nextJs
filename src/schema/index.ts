import {z} from 'zod';

export const OrderSchema = z.object({

    name: z.string()
            .min(1,'Nombre obligatorio!')
            .max(50,'Nombre muy largo!'),
    total: z.number()
            .min(1,'Total no puede ser menor a 1'),
    order:z.array(z.object({   
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number() 

    }))

});

export const SearchSchema = z.object({

    search: z.string()
            .trim()
            .min(1,'la busqueda de productos no puede ir en blanco!')
            

});

