
export default function handler(req, res) {
    const endTime = process.env.TIMER_END;

    if (!endTime) {
        return res.status(500).json({ error: "TIMER_END is not configured" });
    }

    res.status(200).json({ endTime });
}
