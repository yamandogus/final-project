import { ProductProps } from "../components/Protein/Protein";

export const lastVisited =(product:ProductProps)=>{
  const visitProduct = JSON.parse(localStorage.getItem("last-visited") || "[]");
  const visitedFilter = visitProduct.filter((i:ProductProps)=> i.slug !== product.slug);
  visitedFilter.unshift(product);
  const updateVisitedFilter = visitedFilter.slice(0,6);
  localStorage.setItem("last-visited", JSON.stringify(updateVisitedFilter))
}