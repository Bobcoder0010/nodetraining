exports.updateBlog =async (req,res) => {
    let result = await blogs.update({
        ...req.body,
        where : {
            id:req.params.id,
        },
    });
    req.status(200).json({
        success : true,
        message : "updated successfully",
    });
};