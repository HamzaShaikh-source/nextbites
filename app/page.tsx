import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Tonight&apos;s recipes</h1>
        <p className={styles.lede}>
          {recipes.length} dishes from around the world, from a 25-minute
          weeknight taco to a Sunday-long braise.
        </p>
      </header>
      <section className={styles.grid} aria-label="Recipes">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </main>
  );
}
