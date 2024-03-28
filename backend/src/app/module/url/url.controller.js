const { nanoid } = require('nanoid');
const Url = require('./url.model');
const validateUrl = require('../../../utility/validURL');
const asyncHandler = require('express-async-handler');


/**
 * @desc    Short URL Generator
 * @route   /api/v1/short/
 * @method  POST
 * @access  Public
 */

const shortURL = asyncHandler(async (req, res) => {
  const { origUrl } = req.body;
  const base = process.env.BASE;

  // Validate the original URL
  if (!validateUrl(origUrl)) {
    return res.status(400).json({ error: 'Invalid Original URL' });
  }

  try {
    // Check if the URL already exists in the database
    let url = await Url.findOne({ origUrl });

    // If the URL already exists, return it
    if (url) {
      return res.json(url);
    }

    // Generate a unique URL ID
    const urlId = nanoid();

    // Create the short URL
    const shortUrl = `${base}/${urlId}`;

    // Create a new URL document
    url = new Url({
      origUrl,
      shortUrl,
      urlId,
      date: new Date(),
    });

    // Save the URL document to the database
    await url.save();

    // Return the newly created URL
    res.status(201).json(url);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});


/**
 * @desc    Short URL Generator
 * @route   /api/v1/short/:urlId
 * @method  GET
 * @access  Public
 */

const getURL = asyncHandler(async (req, res) => {
    try {
        const url = await Url.findOne({ urlId: req.params.urlId });
        if (url) {
            // URL.updateOne(cons, { $inc: { clicks: 1 }})
          await Url.updateOne(
            {
              urlId: req.params.urlId,
            },
            { $inc: { clicks: 1 } }
            
          );
          return res.redirect(url.origUrl);
        } else res.status(404).json('Not found');
      } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
      }
  });

  
module.exports = {
    shortURL,
    getURL,
  };