import type { Recipe } from "../data/recipes";
import styles from "./RecipeCard.module.css";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className={styles.card}>
      <p className={styles.cuisine}>{recipe.cuisine}</p>
      <h2 className={styles.title}>{recipe.title}</h2>
      <p className={styles.description}>{recipe.description}</p>
      <dl className={styles.meta}>
        <div>
          <dt>Time</dt>
          <dd>{recipe.minutes} min</dd>
        </div>
        <div>
          <dt>Level</dt>
          <dd>{recipe.difficulty}</dd>
        </div>
      </dl>
    </article>
  );
}
