const ejs = require('ejs');
const fs = require('fs');

const chains = require('../schemas/chains/chains.json')
const categories = require('../schemas/categories/categories.json')

const generateChains = async () => {
  const template ="./templates/places/_chains_table.mdx.ejs";
  const output = "./docs/places/_chains_table.mdx";

  console.log(`Regenerating ${output} from ${template}`);

  const table =
    await ejs.renderFile(
      template,
      { chains },
      { async: true, rmWhitespace: true },
    );

  fs.writeFileSync(output, table)
};

const generateTopLevelCategories = async () => {
  const template ="./templates/places/_top_level_categories.mdx.ejs";
  const output = "./docs/places/_top_level_categories.mdx";

  const topLevelWithDupes =
    Object.keys(categories).map((slug) => {
      return categories[slug].categories[0];
    });

  const topLevelCategories = [...new Set(topLevelWithDupes)].sort();

  console.log(`Regenerating ${output} from ${template}`);

  const list =
    await ejs.renderFile(
      template,
      { topLevelCategories },
      { async: true, rmWhitespace: true },
    );

  fs.writeFileSync(output, list)
};

const generateCategories = async () => {
  const template ="./templates/places/_categories_table.mdx.ejs";
  const output = "./docs/places/_categories_table.mdx";

  console.log(`Regenerating ${output} from ${template}`);

  const table =
    await ejs.renderFile(
      template,
      { categories },
      { async: true, rmWhitespace: true },
    );

  fs.writeFileSync(output, table)
};

(async () => {
  await generateChains();
  await generateTopLevelCategories();
  await generateCategories();
})();