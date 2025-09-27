const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}


module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" }, }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });

}

module.exports.createListing = async (req, res, next) => {
    let filename = req.filefilename;
    let url = req.file.path;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
}


module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let updatedData = req.body.listing;
    let listing = await Listing.findById(id);
    if (!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "Yoou dont have permission to edit");
        return res.redirect(`/listings/${id}`);
    }

    console.log("Updated Image:", updatedData.image);

    // Check if image is missing or not a string
    if (!updatedData.image || !updatedData.image.url || updatedData.image.url.trim() === "") {
        updatedData.image = listing.image; // preserve old image if user left the field empty
    }
    req.flash("success", "Listing Updated!");
    await Listing.findByIdAndUpdate(id, updatedData);
    res.redirect(`/listings/${id}`);

}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}