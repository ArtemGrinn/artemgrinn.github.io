---
title:  "Reducing JS bundle size via Webpack"
date:   2016-12-07 10:18:00
description: Webpack plugins for reduce JavaScript bundle size
---

{% highlight js %}
plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
{% endhighlight %}
