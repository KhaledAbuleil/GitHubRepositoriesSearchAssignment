using SearchGitRepoProj.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace SearchGitRepoProj.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public string UpdateSession(string name, string url)
        {
            if(Session["Bookmarked"] != null)
            {
                List<Repositry> lst = Session["Bookmarked"] as List<Repositry>;
                lst.Add(new Repositry { name = name, url = url });
                Session["Bookmarked"] = lst;
                return JsonConvert.SerializeObject(lst);
            }
            else
            {
                List<Repositry> lst = new List<Repositry> ();
                lst.Add(new Repositry { name = name, url = url });
                Session["Bookmarked"] = lst;
                return JsonConvert.SerializeObject(lst);
            }
        }
    }
}