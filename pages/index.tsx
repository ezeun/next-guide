import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { server } from '../config'
import ArticleList from '../components/ArticleList'
import { Character, GetCharacterResults } from "../types";
import type { Article } from '../types'

type Props = {
  articles: Article[]
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      characters: articles,
    },
  }
}

export default Home
