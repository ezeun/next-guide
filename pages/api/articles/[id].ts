import { articles } from '../../../data'

export default function handler(query: { id: any }, res: any) {
    const filtered = articles.filter((article) => article.id === query.id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res
            .status(404)
            .json({ message: `Article with the id of ${query.id} is not found` })
    }
}
