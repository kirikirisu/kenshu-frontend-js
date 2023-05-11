const company = {
  company_id: 1234,
  company_name: "会社名",
};
console.log(company);

const title = {
  article_id: 9876,
  article_title: "タイトル",
};

console.log(title);

const merged = { ...company, ...title };
console.log(merged);
