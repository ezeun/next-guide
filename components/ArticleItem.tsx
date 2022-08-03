import React, { FunctionComponent } from "react";
import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'
import type { Article } from '../types'

type Props = {
    article: Article
}
//function ArticleItem(article: any) {
const ArticleItem: FunctionComponent<Props> = ({ article }) => {
    return (
        <Link href={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleItem