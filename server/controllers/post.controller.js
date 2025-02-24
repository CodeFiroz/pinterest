export const uploadPost = async (req, res) => {
    try {
        console.log("Received Data:", req.body);
        console.log("----------------------");
        console.log("Uploaded File:", req.file);

        if (!req.file) {
            return res.status(400).json({ success: false, message: "File upload failed!" });
        }

        return res.status(200).json({ success: true, message: "Post uploaded successfully!", file: req.file });
    } catch (err) {
        console.log("Error on uploadPost", err);
        return res.status(500).json({ success: false, message: "Internal server error", err });
    }
};
