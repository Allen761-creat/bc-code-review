import generateContent from "../services/aiservice.js"

export const response = async (req, res) => {
    try {

        const code = req.body.code
        if (!code) {
            return res.send("Hey! You forgot to add a code! 😅");
        }
        const response = await generateContent(code)
        res.send(response)
    } catch (error) {
        console.error(error)
    }

}