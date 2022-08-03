import React, { FunctionComponent } from "react";
import ArticleItem from './ArticleItem';
import articleStyles from '../styles/Article.module.css';
import type { Article } from '../types';

type Props = {
    articles: Article[]
}

const ArticleList: FunctionComponent<Props> = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article) => (
                <ArticleItem article={article} />
            ))}
        </div>
    )
}

export default ArticleList