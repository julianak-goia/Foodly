'use server'

import { db } from "@/app/lib/prisma";

const searchForRestaurants = async (search: string) => {
    const restaurants = await db.restaurant.findMany({
        where: {
            name: {
                contains: search,
                mode: 'insensitive',
            }
        }
    })
    return restaurants;
}

export default searchForRestaurants;