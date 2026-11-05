import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";
import styles from "./recipe.module.css";

export function generateStaticParams() {
  return recipes.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/recipe/[id]">): Promise<Metadata> {
  const { id } = await params;
  const recipe = getRecipe(id);
  return recipe
    ? { title: `${recipe.title} | NextBites`, description: recipe.description }
    : { title: "Recipe not found | NextBites" };
}

export default async function RecipePage({ params }: PageProps<"/recipe/[id]">) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) notFound();

  return (
    <main className={styles.main}>
      <Link href="/" className={styles.back}>← All recipes</Link>
      <article className={styles.article}>
        <p className={styles.eyebrow}>{recipe.cuisine} cuisine</p>
        <h1>{recipe.title}</h1>
        <p className={styles.description}>{recipe.description}</p>
        <dl className={styles.facts}>
          <div><dt>Time</dt><dd>{recipe.minutes} minutes</dd></div>
          <div><dt>Difficulty</dt><dd>{recipe.difficulty}</dd></div>
        </dl>
      </article>
    </main>
  );
}
