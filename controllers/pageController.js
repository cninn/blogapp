const getIndexPage = (req,res)=>{
    res.render('index',{
        link:'index'
    })
}
const getDiscoverPage = (req,res)=>{
    res.render('blogs',{
        link:'blogs'
    })
}

const getDashboardPage = (req,res)=>{
    res.render('dashboard',{
        link:'dashboard',
        
    })
}
const getBlogPage = (req,res)=>{
    res.render('blog',{
        link:'blog'
    })
}

export {
    getIndexPage,
    getDiscoverPage,
    getDashboardPage,
    getBlogPage

}