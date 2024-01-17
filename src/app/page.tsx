/* eslint-disable react-hooks/rules-of-hooks */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getRecipes } from "@/services/getRecipes";

import { Vegan } from "lucide-react";

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <>
            <Card key={recipe.id} className="flex flex-col justify-between">
              <CardHeader className="flex flex-row justify-between">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={`/img/${recipe.image}`} />
                </Avatar>
                <div className="flex flex-col gap-3 text-end">
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription>{recipe.time} mins to cook</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{recipe.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <Button variant="default" className="decoration-transparent">View Recipe</Button>
                  {recipe.vegan &&
                    <Badge variant="secondary" className="cursor-pointer gap-2">
                      <Vegan size={20} />
                      Vegan
                    </Badge>
                  }
                </div>
              </CardFooter>
            </Card >
          </>
        ))}
      </div>
    </main >
  )
}
