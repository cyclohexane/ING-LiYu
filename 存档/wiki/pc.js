document.write("<script language=javascript src='js/getquority.js'></script>");
document.write("<script language=javascript src='js/common.js'></script>");

function getNowPage() {
    // body...
    return $(document.body).attr("id");
}
//总监 0
function BOSS() {
    switch (getNowPage()) {
        case "index":
            console.log("当前访问页面id：" + getNowPage());
            getaccountbyuserid(userinfo.userId);
            undeal(null);
            $("#monthin").html("公司当月入账");
            $("#monthout").html("公司当月出账");
            $("#monthchae").html("公司当月差额");

            break;
        case "object":
            $(".waitloading").hide();
            console.log("当前访问页面id：" + getNowPage());
            // $("#newitem").hide();
            getobjectList(0);
            getcitemuser();
            getitemaccountlist(GetQueryString("itemId"))
            break;
        case "user":
            console.log("当前访问页面id：" + getNowPage());
            getuser();
            break;
        case "companyaccount":
            console.log("当前访问页面id：" + getNowPage());
            getcompanyaccount();
            getcompanyaccountlist();
            break;
        case "waitcheckaccount":
            console.log("当前访问页面id：" + getNowPage());
            if (GetQueryString("itemId") != null) {
                $("#checkifobject").attr("href", "account.html?itemId=" + GetQueryString("itemId"));
            }
            getwaitcheckaccount();
            break;
        case "accountinfo":
            console.log("当前访问页面id：" + getNowPage());
            getaccountInfo();
            break;
        case "account":
            console.log("当前访问页面id：" + getNowPage());
            getmoney(GetQueryString("itemId"));
            getitemaccountlist(GetQueryString("itemId"));
            break;
        case "material":
            console.log("当前访问页面id：" + getNowPage());
            $("#waitcheckshouru").attr("href", "waitcheckshouru.html?itemId=" + GetQueryString("itemId"));
            $("#waitcheckzhichu").attr("href", "waitcheckzhichu.html?itemId=" + GetQueryString("itemId"));
            getmaterialalllist(GetQueryString("itemId"));
            getSupply();
            getmaterial();
            break;
        case "waitcheckshouru":
            console.log("当前访问页面id：" + getNowPage());
            if (GetQueryString("itemId") != null) {
                $("#checkifobject").attr("href", "material.html?itemId=" + GetQueryString("itemId"));
            }
            getwaitcheckshouru(GetQueryString("itemId"));
            break;
        case "waitcheckzhichu":
            console.log("当前访问页面id：" + getNowPage());
            if (GetQueryString("itemId") != null) {
                $("#checkifobject").attr("href", "material.html?itemId=" + GetQueryString("itemId"));
            }
            getwaitcheckzhichu(GetQueryString("itemId"));
            break;
        case "supply":
            console.log("当前访问页面id：" + getNowPage());
            getsupply();
            break;
        case "materialdy":
            console.log("当前访问页面id：" + getNowPage());
            getmaterialdy();
        default:
    }
}

//项目经理 1
function OBJECTMAN() {
    switch (getNowPage()) {
        case "index":
            console.log("当前访问页面id：" + getNowPage());
            getaccountbyuserid(userinfo.userId);
            undeal(userinfo.itemId);
            $(".boss").hide();
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("项目当月入账");
            $("#monthout").html("项目当月出账");
            $("#monthchae").html("项目当月差额");
            break;
        case "object":
            $(".waitloading").hide();
            console.log("当前访问页面id：" + getNowPage());
            // $("#newitem").hide();
            getobjectList(0);
            getcitemuser();
            getitemaccountlist(GetQueryString("itemId"));
            $(".boss").hide();
            $("#delobject").hide();
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("项目当月入账");
            $("#monthout").html("项目当月出账");
            $("#monthchae").html("项目当月差额");
            break;
        case "waitcheckaccount":
            console.log("当前访问页面id：" + getNowPage());
            $("#checkifobject").attr("href", "account.html?itemId=" + GetQueryString("itemId"));
            $("#checkifobject").html("返回项目财务首页");

            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            getwaitcheckaccount();
            break;
        case "accountinfo":
            console.log("当前访问页面id：" + getNowPage());
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".checkadminer").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $("#itemadminer").attr("href", "waitcheckaccount.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");

            getaccountInfo();
            break;
        case "account":
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".accounter").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("项目当月入账");
            $("#monthout").html("项目当月出账");
            $("#monthchae").html("项目当月差额");
            console.log("当前访问页面id：" + getNowPage());
            getmoney(GetQueryString("itemId"));
            getitemaccountlist(GetQueryString("itemId"));
            break;
        case "material":
            console.log("当前访问页面id：" + getNowPage());
            $("#waitcheckshouru").attr("href", "waitcheckshouru.html?itemId=" + GetQueryString("itemId"));
            $("#waitcheckzhichu").attr("href", "waitcheckzhichu.html?itemId=" + GetQueryString("itemId"));
            $("#useradmin").hide();
            $("#companyaccountadmin").hide();
            $(".materiader").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            getmaterialalllist(GetQueryString("itemId"));
            getSupply();
            getmaterial();
            break;
        case "waitcheckshouru":
            console.log("当前访问页面id：" + getNowPage());
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".materiader").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#checkifobject").html("返回项目材料首页");
            $("#checkifobject").attr("href", "material.html?itemId=" + GetQueryString("itemId"));
            getwaitcheckshouru(GetQueryString("itemId"));
            break;
        case "waitcheckzhichu":
            console.log("当前访问页面id：" + getNowPage());
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".materiader").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#checkifobject").html("返回项目材料首页");
            $("#checkifobject").attr("href", "material.html?itemId=" + GetQueryString("itemId"));
            $("#checkifobject").attr("href", "material.html?itemId=" + GetQueryString("itemId"));
            getwaitcheckzhichu(GetQueryString("itemId"));
        default:
    }
}

//公司财务管理员 2
function COMPANYACCOUNTMAN() {
    switch (getNowPage()) {
        case "index":
            console.log("当前访问页面id：" + getNowPage());
            getaccountbyuserid(userinfo.userId);
            undeal();
            $(".boss").hide();
            $("#useradmin").hide();
            $("#objectadmin").hide();
            $("#monthin").html("公司当月入账");
            $("#monthout").html("公司当月出账");
            $("#monthchae").html("公司当月差额");
            break;
        case "companyaccount":
            console.log("当前访问页面id：" + getNowPage());
            getcompanyaccount();
            getcompanyaccountlist();
            $("#useradmin").hide();
            $("#objectadmin").hide();
            $(".accountcheck").hide();
            $("#monthin").html("公司当月入账");
            $("#monthout").html("公司当月出账");
            $("#monthchae").html("公司当月差额");
            break;
        case "waitcheckaccount":
            $("#useradmin").hide();
            $("#objectadmin").hide();
            console.log("当前访问页面id：" + getNowPage());
            if (GetQueryString("itemId") != null) {
                $("#checkifobject").attr("href", "account.html?itemId=" + GetQueryString("itemId"));
            }
            getwaitcheckaccount();
            break;
        case "accountinfo":
            console.log("当前访问页面id：" + getNowPage());
            getaccountInfo();
            break;
        default:
    }
}

//记账员 3
function OBJECTACCOUNTMAN() {
    switch (getNowPage()) {
        case "index":
            console.log("当前访问页面id：" + getNowPage());
            getaccountbyuserid(userinfo.userId);
            undeal(userinfo.itemId);
            $(".boss").hide();
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("个人当月入账报账");
            $("#monthout").html("个人当月出账报账");
            $("#chae").hide();
            break;
        case "object":
            $(".waitloading").hide();
            console.log("当前访问页面id：" + getNowPage());
            // $("#newitem").hide();
            getobjectList(0);
            // getitemaccountlist(GetQueryString("itemId"));
            $("#accountgental").hide();
            $("#leftgentor").attr('style', "width:100%");
            $(".waitloading2").show();
            $("#loadinggif2").hide();
            $("#accountlist").after(
                '<tr><td colspan=6 style="text-align:center">您没有查看财务流水的权限</td></tr>'
            );
            $(".waitloading3").show();
            $("#loadinggif3").hide();
            $("#materiallist").after(
                '<tr><td colspan=6 style="text-align:center">您没有查看材料库存的权限</td></tr>'
            );
            // getitemaccountlist(GetQueryString("itemId"));
            $(".boss").hide();
            $("#delobject").hide();
            $("#materialadmin").hide();
            $("#objectuser").hide();
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("项目当月入账");
            $("#monthout").html("项目当月出账");
            $("#monthchae").html("项目当月差额");
            // $("#monthin").html("项目当月入账");
            // $("#monthout").html("项目当月出账");
            // $("#monthchae").html("项目当月差额");
            break;
        case "waitcheckaccount":
            console.log("当前访问页面id：" + getNowPage());
            $("#checkifobject").attr("href", "account.html?itemId=" + GetQueryString("itemId"));
            $("#checkifobject").html("返回项目财务首页");

            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            getwaitcheckaccount();
            break;
        case "accountinfo":
            console.log("当前访问页面id：" + getNowPage());
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".checkadminer").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $("#itemadminer").attr("href", "waitcheckaccount.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");

            getaccountInfo();
            break;
        case "account":
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".checkaccounter").hide();
            $("#objectadminer").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("项目当月入账");
            $("#monthout").html("项目当月出账");
            $("#monthchae").html("项目当月差额");
            console.log("当前访问页面id：" + getNowPage());
            getmoney(GetQueryString("itemId"));
            getitemaccountlist(GetQueryString("itemId"));
            break;
        default:
    }
}

//财务审核员 4
function OBJECTACCOUNTCHECKMAN() {
    switch (getNowPage()) {
        case "index":
            console.log("当前访问页面id：" + getNowPage());
            getaccountbyuserid(userinfo.userId);
            undeal(userinfo.itemId);
            $(".boss").hide();
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("个人当月入账报账");
            $("#monthout").html("个人当月出账报账");
            $("#chae").hide();
            break;
        case "object":
            $(".waitloading").hide();
            console.log("当前访问页面id：" + getNowPage());
            // $("#newitem").hide();
            getobjectList(0);
            getitemaccountlist(GetQueryString("itemId"));
            $("#accountgental").hide();
            $("#leftgentor").attr('style', "width:100%");
            $(".waitloading3").show();
            $("#loadinggif3").hide();
            $("#materiallist").after(
                '<tr><td colspan=6 style="text-align:center">您没有查看材料库存的权限</td></tr>'
            );
            // getitemaccountlist(GetQueryString("itemId"));
            $(".boss").hide();
            $("#delobject").hide();
            $("#materialadmin").hide();
            $("#objectuser").hide();
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("项目当月入账");
            $("#monthout").html("项目当月出账");
            $("#monthchae").html("项目当月差额");
            // $("#monthin").html("项目当月入账");
            // $("#monthout").html("项目当月出账");
            // $("#monthchae").html("项目当月差额");
            break;
        case "waitcheckaccount":
            console.log("当前访问页面id：" + getNowPage());
            $("#checkifobject").attr("href", "account.html?itemId=" + GetQueryString("itemId"));
            $("#checkifobject").html("返回项目财务首页");

            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            getwaitcheckaccount();
            break;
        case "accountinfo":
            console.log("当前访问页面id：" + getNowPage());
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".checkadminer").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $("#itemadminer").attr("href", "waitcheckaccount.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");

            getaccountInfo();
            break;
        case "account":
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".accounter").hide();
            $("#objectadminer").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("项目当月入账");
            $("#monthout").html("项目当月出账");
            $("#monthchae").html("项目当月差额");
            console.log("当前访问页面id：" + getNowPage());
            getmoney(GetQueryString("itemId"));
            getitemaccountlist(GetQueryString("itemId"));
            break;
        default:
    }
}

//材料员 5
function MATERIALMAN() {
    switch (getNowPage()) {
        case "index":
            console.log("当前访问页面id：" + getNowPage());
            getaccountbyuserid(userinfo.userId);
            undeal(userinfo.itemId);
            $(".boss").hide();
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("个人当月入账报账");
            $("#monthout").html("个人当月出账报账");
            $("#chae").hide();
            break;
        case "object":
            $(".waitloading").hide();
            console.log("当前访问页面id：" + getNowPage());
            // $("#newitem").hide();
            getobjectList(0);
            getcitemuser();
            $("#accountgental").hide();
            $("#leftgentor").attr('style', "width:100%");
            $(".waitloading2").show();
            $("#loadinggif2").hide();
            $("#accountlist").after(
                '<tr><td colspan=6 style="text-align:center">您没有查看财务流水的权限</td></tr>'
            );
            // getitemaccountlist(GetQueryString("itemId"));
            $(".boss").hide();
            $("#delobject").hide();
            $("#accountadmin").hide();
            $("#objectuser").hide();
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("项目当月入账");
            $("#monthout").html("项目当月出账");
            $("#monthchae").html("项目当月差额");
            break;
        case "material":
            console.log("当前访问页面id：" + getNowPage());
            $("#waitcheckshouru").attr("href", "waitcheckshouru.html?itemId=" + GetQueryString("itemId"));
            $("#waitcheckzhichu").attr("href", "waitcheckzhichu.html?itemId=" + GetQueryString("itemId"));
            $("#useradmin").hide();
            $("#companyaccountadmin").hide();
            $(".checker").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            getmaterialalllist(GetQueryString("itemId"));
            getSupply();
            getmaterial();
            break;
        case "waitcheckshouru":
            console.log("当前访问页面id：" + getNowPage());
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".materiader").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#checkifobject").html("返回项目材料首页");
            $("#checkifobject").attr("href", "material.html?itemId=" + GetQueryString("itemId"));
            getwaitcheckshouru(GetQueryString("itemId"));
            break;
        case "waitcheckzhichu":
            console.log("当前访问页面id：" + getNowPage());
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".materiader").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#checkifobject").html("返回项目材料首页");
            $("#checkifobject").attr("href", "material.html?itemId=" + GetQueryString("itemId"));
            $("#checkifobject").attr("href", "material.html?itemId=" + GetQueryString("itemId"));
            getwaitcheckzhichu(GetQueryString("itemId"));
        default:
    }
}

//材料审核员 6
function MATERIALCHECKMAN() {
    switch (getNowPage()) {
        case "index":
            console.log("当前访问页面id：" + getNowPage());
            getaccountbyuserid(userinfo.userId);
            undeal(userinfo.itemId);
            $(".boss").hide();
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("个人当月入账报账");
            $("#monthout").html("个人当月出账报账");
            $("#chae").hide();
            break;
        case "object":
            $(".waitloading").hide();
            console.log("当前访问页面id：" + getNowPage());
            // $("#newitem").hide();
            getobjectList(0);
            getcitemuser();
            $("#accountgental").hide();
            $("#leftgentor").attr('style', "width:100%");
            $(".waitloading2").show();
            $("#loadinggif2").hide();
            $("#accountlist").after(
                '<tr><td colspan=6 style="text-align:center">您没有查看财务流水的权限</td></tr>'
            );
            // getitemaccountlist(GetQueryString("itemId"));
            $(".boss").hide();
            $("#delobject").hide();
            $("#accountadmin").hide();
            $("#objectuser").hide();
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("项目当月入账");
            $("#monthout").html("项目当月出账");
            $("#monthchae").html("项目当月差额");
            break;
        case "waitcheckaccount":
            console.log("当前访问页面id：" + getNowPage());
            $("#checkifobject").attr("href", "account.html?itemId=" + GetQueryString("itemId"));
            $("#checkifobject").html("返回项目财务首页");

            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            getwaitcheckaccount();
            break;
        case "accountinfo":
            console.log("当前访问页面id：" + getNowPage());
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".checkadminer").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $("#itemadminer").attr("href", "waitcheckaccount.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");

            getaccountInfo();
            break;
        case "account":
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".accounter").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#monthin").html("项目当月入账");
            $("#monthout").html("项目当月出账");
            $("#monthchae").html("项目当月差额");
            console.log("当前访问页面id：" + getNowPage());
            getmoney(GetQueryString("itemId"));
            getitemaccountlist(GetQueryString("itemId"));
            break;
        case "material":
            console.log("当前访问页面id：" + getNowPage());
            $("#waitcheckshouru").attr("href", "waitcheckshouru.html?itemId=" + GetQueryString("itemId"));
            $("#waitcheckzhichu").attr("href", "waitcheckzhichu.html?itemId=" + GetQueryString("itemId"));
            $("#useradmin").hide();
            $("#companyaccountadmin").hide();
            $(".materiader").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            getmaterialalllist(GetQueryString("itemId"));
            getSupply();
            getmaterial();
            break;
        case "waitcheckshouru":
            console.log("当前访问页面id：" + getNowPage());
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".materiader").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#checkifobject").html("返回项目材料首页");
            $("#checkifobject").attr("href", "material.html?itemId=" + GetQueryString("itemId"));
            getwaitcheckshouru(GetQueryString("itemId"));
            break;
        case "waitcheckzhichu":
            console.log("当前访问页面id：" + getNowPage());
            $("#companyaccountadmin").hide();
            $("#useradmin").hide();
            $(".materiader").hide();
            $(".objectadmin2").attr("href", "object.html?itemId=" + userinfo.itemId);
            $(".objectman").html("我的项目");
            $("#checkifobject").html("返回项目材料首页");
            $("#checkifobject").attr("href", "material.html?itemId=" + GetQueryString("itemId"));
            $("#checkifobject").attr("href", "material.html?itemId=" + GetQueryString("itemId"));
            getwaitcheckzhichu(GetQueryString("itemId"));
        default:
    }
}

//普通员工 7
function MAN() {
    switch (getNowPage()) {
        case "index":
            console.log("当前访问页面id：" + getNowPage());
            getaccountbyuserid(userinfo.userId);
            undeal();
            $(".boss").hide();
            $("#useradmin").hide();
            $("#objectadmin").hide();
            $("#monthin").html("个人当月入账报账");
            $("#monthout").html("个人当月出账报账");
            $("#chae").hide();
            break;
        case "companyaccount":
            console.log("当前访问页面id：" + getNowPage());
            getcompanyaccount();
            getcompanyaccountlist();
            $("#useradmin").hide();
            $("#objectadmin").hide();
            $(".checker").hide();
            $("#monthin").html("公司当月入账");
            $("#monthout").html("公司当月出账");
            $("#monthchae").html("公司当月差额");
            break;
        case "waitcheckaccount":
            $("#useradmin").hide();
            $("#objectadmin").hide();
            console.log("当前访问页面id：" + getNowPage());
            if (GetQueryString("itemId") != null) {
                $("#checkifobject").attr("href", "account.html?itemId=" + GetQueryString("itemId"));
            }
            getwaitcheckaccount();
            break;
        case "accountinfo":
            console.log("当前访问页面id：" + getNowPage());
            getaccountInfo();
            break;
        default:
    }
}

//其他函数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function getNowPage() {
    // body...
    return $(document.body).attr("id");
}

function logininform() {
    $("#alertlogin").modal({ backdrop: 'static', keyboard: false }); //手动开启
}

function timeFormat(nS) {
    return new Date(parseInt(("/Date(" + nS + ")/").substr(6, 13))).toLocaleDateString();
}

function getUserType(TypeID) {
    // body...
    if (TypeID == 0) {
        return "总监";
    } else if (TypeID == 1) {
        return "项目经理";
    } else if (TypeID == 2) {
        return "公司财务管理员";
    } else if (TypeID == 3) {
        return "项目记账员";
    } else if (TypeID == 4) {
        return "项目财务审核员";
    } else if (TypeID == 5) {
        return "项目材料员";
    } else if (TypeID == 6) {
        return "项目材料审核员";
    } else if (TypeID == 7) {
        return "普通员工";
    }
}

function timestampToTime(timestamp) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
}

function changetime(time, nows) {
    // body...
    var arr = time.split("/");
    if (nows == "now") {
        arr[1] = (parseInt(arr[1]) + 1);
        if (arr[1] < 10) {
            arr[1] = "0" + arr[1];
            return arr[2] + "-" + arr[0] + "-" + arr[1];
        } else {
            return arr[2] + "-" + arr[0] + "-" + arr[1];
        }
    } else {
        return arr[2] + "-" + arr[0] + "-" + arr[1];
    }
}

//接口函数
function getmaterialdy() {
    var pageid = GetQueryString("pageId");
    if (pageid == null) {
        pageid = 1;
    }
    $.ajax({
        url: "/project/category/categorylist.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": pageid,
            "pageSize": 5
        },
        beforeSend: function() {
            $("#loadinggif1").show();
        },
        complete: function() {
            $("#loadinggif1").hide();
            $(".waitloading1").show();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取供货商信息成功");
                $("#totalusernum").html(data.data.total);
                $("#totalpagenum").html(data.data.lastPage);
                $("#nowpage").html(data.data.pageNum);
                //处理分页
                if (!data.data.isFirstPage) {
                    $("#frontitem").attr("href", "?pageId=" + (pageid - 1));
                } else {
                    $("#frontitem").hide();
                }
                if (!data.data.isLastPage) {
                    $("#nextitem").attr("href", "?pageId=" + data.data.nextPage);
                } else {
                    $("#nextitem").hide();
                }
                //处理数据
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    //项目列表数据处理
                    var itemlist = document.getElementById("userlist");

                    var tr = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var uid = document.createTextNode(value['categoryId']);
                    td1.appendChild(uid);
                    tr.appendChild(td1);

                    var td2 = document.createElement("td");
                    var img = document.createTextNode(value['categoryName']);
                    td2.appendChild(img);
                    tr.appendChild(td2);

                    var td5 = document.createElement("td");
                    var createTime = document.createTextNode(timeFormat(value['createTime']));
                    td5.appendChild(createTime);
                    tr.appendChild(td5);

                    var td6 = document.createElement("td");
                    var a = document.createElement("a");
                    var xq = document.createTextNode("删除");
                    a.id = "delmaterialbtn" + value['categoryId'];
                    a.setAttribute('class', 'btn btn-default');
                    a.appendChild(xq);
                    td6.appendChild(a);
                    tr.appendChild(td6);

                    itemlist.appendChild(tr);
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取员工信息失败");
            }
        },
    });
}
//
function getsupply() {
    // body...
    var pageid = GetQueryString("pageId");
    if (pageid == null) {
        pageid = 1;
    }
    $.ajax({
        url: "/project/offerer/offererlist.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": pageid,
            "pageSize": 5
        },
        beforeSend: function() {
            $("#loadinggif1").show();
        },
        complete: function() {
            $("#loadinggif1").hide();
            $(".waitloading1").show();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取供货商信息成功");
                $("#totalusernum").html(data.data.total);
                $("#totalpagenum").html(data.data.lastPage);
                $("#nowpage").html(data.data.pageNum);
                //处理分页
                if (!data.data.isFirstPage) {
                    $("#frontitem").attr("href", "?pageId=" + (pageid - 1));
                } else {
                    $("#frontitem").hide();
                }
                if (!data.data.isLastPage) {
                    $("#nextitem").attr("href", "?pageId=" + data.data.nextPage);
                } else {
                    $("#nextitem").hide();
                }
                //处理数据
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    //项目列表数据处理
                    var itemlist = document.getElementById("userlist");

                    var tr = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var uid = document.createTextNode(value['offerId']);
                    td1.appendChild(uid);
                    tr.appendChild(td1);

                    var td2 = document.createElement("td");
                    var img = document.createTextNode(value['offerCompany']);
                    td2.appendChild(img);
                    tr.appendChild(td2);

                    var td3 = document.createElement("td");
                    var userName = document.createTextNode(value['address']);
                    td3.appendChild(userName);
                    tr.appendChild(td3);

                    var td4 = document.createElement("td");
                    var usertype = document.createTextNode(value['offerPhone']);
                    td4.appendChild(usertype);
                    tr.appendChild(td4);

                    var td5 = document.createElement("td");
                    var createTime = document.createTextNode(timeFormat(value['createTime']));
                    td5.appendChild(createTime);
                    tr.appendChild(td5);

                    var td6 = document.createElement("td");
                    var a = document.createElement("a");
                    var xq = document.createTextNode("详情");
                    a.id = "changeoffer" + value['offerId'];
                    a.setAttribute('class', 'btn btn-default');
                    a.appendChild(xq);
                    td6.appendChild(a);
                    tr.appendChild(td6);

                    itemlist.appendChild(tr);
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取员工信息失败");
            }
        },
    });
}

function getaccountbyuserid(userid) {
    // body...
    var url = "/project/user/getaccountbyuserid.do";
    $.ajax({
        url: url,
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        beforeSend: function() {
            // $("#loadinggif2").show();
        },
        complete: function() {
            // $("#loadinggif2").hide();
            // $(".waitloading2").show();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取进出帐信息成功");
                //处理数据
                var value = data.data;
                $("#accountin").html("￥" + value['monthIncomeAccount']);
                $("#accountout").html("￥" + value['monthPayAccount']);
                $("#accountchae").html("￥" + (value['monthIncomeAccount'] + value['monthPayAccount']));
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取材料信息失败");
            }
        },
    });
}

function undeal(itemId) {
    // body...
    var url = "/project/user/undeal.do";
    $.ajax({
        url: url,
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        beforeSend: function() {
            // $("#loadinggif2").show();
        },
        complete: function() {
            // $("#loadinggif2").hide();
            // $(".waitloading2").show();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取进出帐信息成功");
                //处理数据
                var value = data.data;
                for (var i = value.length - 1; i >= 0; i--) {
                    $("#waitdo").append(
                        '<tr><td id="waitdo' + i + '">' + value[i] + '</td></tr>'
                    );
                    if (value[i] == "您有财务记录需要审核") {
                        console.log(value[i]);
                        if (itemId == null) {
                            $("#waitdo" + i).after(
                                '<td class=""><a href="waitcheckaccount.html" class="btn btn-success">查看</a></td>'
                            );
                        } else {
                            $("#waitdo" + i).after(
                                '<td class=""><a href="waitcheckaccount.html?itemId=' + itemId + '" class="btn btn-success">查看</a></td>'
                            );
                        }
                    } else if (value[i] == "存在项目相应负责人没有创建") {
                        console.log(value[i]);
                        if (itemId == null) {
                            $("#waitdo" + i).after(
                                '<td class=""><a href="object.html" class="btn btn-success">查看</a></td>'
                            );
                        } else {
                            $("#waitdo" + i).after(
                                '<td class=""><a href="object.html?itemId=' + itemId + '" class="btn btn-success">查看</a></td>'
                            );
                        }
                    }
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取材料信息失败");
            }
        },
    });
}

function getwaitcheckzhichu(itemId) {
    var url = "/project/material/uncheckuselist.do?itemId=" + GetQueryString("itemId");
    $.ajax({
        url: url,
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        beforeSend: function() {
            $("#loadinggif2").show();
        },
        complete: function() {
            $("#loadinggif2").hide();
            $(".waitloading2").show();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取待审核材料流水信息成功");
                //处理数据
                var list = data.data;
                if (list.length == 0) {
                    $("#accountlist").after(
                        '<tr><td colspan=8 style="text-align:center">没有任何待审核材料流水记录</td></tr>'
                    );
                } else {
                    for (var z = list.length - 1; z >= 0; z--) {
                        var listz = list[z];
                        $("#accountlist").after(
                            '<tr><td>' + value['id'] + '</td><td>' + getusername(value['userId']) + '</td><td>' + value['checkUserName'] + '</td><td>' + value['type'] + '</td><td>' + value['number'] + '</td><td>' + value['categoryName'] + '</td><td><a class="btn btn-success" href="materialinfo.html?id=' + value['id'] + '">详情</a></td></tr>'
                        );
                    }
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取材料信息失败");
            }
        },
    });
}

function getwaitcheckshouru(itemId) {
    var url = "/project/material/uncheckbuylist.do?itemId=" + GetQueryString("itemId");
    $.ajax({
        url: url,
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        beforeSend: function() {
            $("#loadinggif2").show();
        },
        complete: function() {
            $("#loadinggif2").hide();
            $(".waitloading2").show();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取待审核材料流水信息成功");
                //处理数据
                var list = data.data;
                if (list.length == 0) {
                    $("#accountlist").after(
                        '<tr><td colspan=8 style="text-align:center">没有任何待审核材料流水记录</td></tr>'
                    );
                } else {
                    for (var z = list.length - 1; z >= 0; z--) {
                        var listz = list[z];
                        $("#accountlist").after(
                            '<tr><td>' + value['id'] + '</td><td>' + getusername(value['userId']) + '</td><td>' + value['checkUserName'] + '</td><td>' + value['type'] + '</td><td>' + value['number'] + '</td><td>' + value['categoryName'] + '</td><td><a class="btn btn-success" href="materialinfo.html?id=' + value['id'] + '">详情</a></td></tr>'
                        );
                    }
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取材料信息失败");
            }
        },
    });
}

function getmaterial() {
    var pageid = GetQueryString("pageId");
    if (pageid == null) {
        pageid = 1;
    }
    $.ajax({
        url: "/project/category/categorylist.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": pageid,
            "pageSize": 10
        },

        success: function(data) {
            if (data.status == 0) {
                console.log("获取材料信息成功");
                //处理分页
                if (!data.data.isFirstPage) {
                    $("#pages").append('<li><a href="?pageId=' + (pageid - 1) + '">&laquo;</a></li>');
                }
                for (var i = 1; i <= data.data.pages; i++) {
                    $("#pages").append('<li><a href="?pageId=' + i + '">' + i + '</a></li>');
                }
                if (!data.data.isLastPage) {
                    $("#pages").append('<li><a href="?pageId=' + data.data.nextPage + '">&raquo;</a></li>');
                }
                //处理数据
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    value['createTime'] = timeFormat(value['createTime']);
                    $("#materiallist").append(
                        '<option value="' + value['categoryName'] + '">' + value['categoryName'] + '</option>'
                    );
                    $("#materiallist2").append(
                        '<option value="' + value['categoryName'] + '">' + value['categoryName'] + '</option>'
                    );
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取材料信息失败");
            }
        },
    });
}

function getSupply() {
    // body...
    var pageid = GetQueryString("pageId");
    if (pageid == null) {
        pageid = 1;
    }
    $.ajax({
        url: "/project/offerer/offererlist.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": pageid,
            "pageSize": 100
        },
        success: function(data) {
            $('#myModal3').modal('hide');

            if (data.status == 0) {
                console.log("获取供货商信息成功");
                //处理分页
                if (!data.data.isFirstPage) {
                    $("#pages").append('<li><a href="?pageId=' + (pageid - 1) + '">&laquo;</a></li>');
                }
                for (var i = 1; i <= data.data.pages; i++) {
                    $("#pages").append('<li><a href="?pageId=' + i + '">' + i + '</a></li>');
                }
                if (!data.data.isLastPage) {
                    $("#pages").append('<li><a href="?pageId=' + data.data.nextPage + '">&raquo;</a></li>');
                }
                //处理数据
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    value['createTime'] = timeFormat(value['createTime']);
                    $("#companylist").append(
                        '<option value="' + value['offerId'] + '">' + value['offerCompany'] + '</option>'
                    );
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取材料信息失败");
            }
        },
    });
}

function getmaterialalllist(itemId) {
    // body...
    var pageid = GetQueryString("pageId");
    if (pageid == null) {
        pageid = 1;
    }
    $.ajax({
        url: "/project/material/materiallist.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": pageid,
            "pageSize": 10,
            "itemId": itemId
        },
        beforeSend: function() {
            $("#loadinggif1").show();
        },
        complete: function() {
            $("#loadinggif1").hide();
            $(".waitloading1").show();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取员工信息成功");
                $("#totalusernum").html(data.data.total);
                $("#totalpagenum").html(data.data.lastPage);
                $("#nowpage").html(data.data.pageNum);
                var noobjectnum = 0;
                //处理分页
                if (!data.data.isFirstPage) {
                    $("#frontitem").attr("href", "?pageId=" + (pageid - 1));
                } else {
                    $("#frontitem").hide();
                }
                if (!data.data.isLastPage) {
                    $("#nextitem").attr("href", "?pageId=" + data.data.nextPage);
                } else {
                    $("#nextitem").hide();
                }
                //处理数据
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    console.log(value);
                    //项目列表数据处理
                    console.log('<tr><td>' + value['id'] + '</td><td>' + getusername(value['userId']) + '</td><td>' + value['checkUserName'] + '</td><td>' + value['type'] + '</td><td>' + value['number'] + '</td><td>' + value['categoryName'] + '</td><td>' + value['lastEditTime'] + '</td><td><a class="btn btn-success" href="materialinfo.html?id=' + value['id'] + '">详情</a></td></tr>');
                    $("#loadinggif1").after(
                        '<tr class="showrow"><td>' + value['id'] + '</td><td>' + getusername(value['userId']) + '</td><td>' + value['checkUserName'] + '</td><td>' + value['type'] + '</td><td>' + value['number'] + '</td><td>' + value['categoryName'] + '</td><td>' + value['lastEditTime'] + '</td><td><a class="btn btn-success" href="materialinfo.html?id=' + value['id'] + '">详情</a></td></tr>'
                    );
                }
                $("#noobjectnum").html(noobjectnum);
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取员工信息失败");
            }
        },
    });
}

function getitemaccountlist(itemId) {
    // body...
    var pageid = GetQueryString("pageId");
    if (pageid == null) {
        pageid = 1;
    }
    $.ajax({
        url: "/project/account/getaccountlist.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": pageid,
            "pageSize": 10,
            "itemId": itemId
        },
        beforeSend: function() {},
        complete: function() {
            $(".waitloading2").show();
            $("#loadinggif2").hide();
        },
        success: function(data) {
            if (data.status == 0) {
                $("#waitcheckaccount").attr("href", "waitcheckaccount.html?itemId=" + itemId)
                console.log("获取财务流水信息成功");
                //处理分页
                if (!data.data.isFirstPage) {
                    $("#frontitem").attr("href", "?pageId=" + (pageid - 1));
                } else {
                    $("#frontitem").hide();
                }
                if (!data.data.isLastPage) {
                    $("#nextitem").attr("href", "?pageId=" + data.data.nextPage);
                } else {
                    $("#nextitem").hide();
                }
                //处理数据
                var list = data.data.list;
                if (list.length == 0) {
                    $("#accountlist").after(
                        '<tr class="showrow"><td colspan=6 style="text-align:center">没有任何流水记录，如果想产生流水记录，请创建流水账单并且通过审核</td></tr>'
                    );
                } else {
                    switch (userinfo.userType) {
                        case 0:
                            console.log("执行老板布局分配");
                            for (var z = list.length - 1; z >= 0; z--) {
                                var listz = list[z];
                                $("#accountlist").after(
                                    '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                );
                            }
                            break;
                        case 1:
                            console.log("执行项目经理布局分配");
                            for (var z = list.length - 1; z >= 0; z--) {
                                var listz = list[z];
                                $("#accountlist").after(
                                    '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                );
                            }
                            break;
                        case 2:
                            console.log("执行公司财务官布局分配");
                            break;
                        case 3:
                            console.log("执行项目财务员布局分配");
                            var x = 0;
                            for (var z = list.length - 1; z >= 0; z--) {
                                var listz = list[z];
                                if (listz['userId'] == userinfo.userId) {
                                    x = 1;
                                    $("#accountlist").after(
                                        '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                    );
                                }
                            }

                            if (x == 0) {
                                $("#accountlist").after(
                                    '<tr class="showrow"><td colspan=6 style="text-align:center">没有任何流水记录，如果想产生流水记录，请创建流水账单并且通过审核</td></tr>'
                                );
                            }
                            break;
                        case 4:
                            console.log("执行项目财务审核员布局分配");
                            for (var z = list.length - 1; z >= 0; z--) {
                                var listz = list[z];
                                $("#accountlist").after(
                                    '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                );
                            }
                            break;
                        case 5:
                            console.log("执行项目材料员布局分配");
                            break;
                        case 6:
                            console.log("执行项目材料审核员布局分配");
                            break;
                        case 7:
                            console.log("执行无分配员工布局分配");
                            break;
                        default:
                    }
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取项目信息失败");
            }
        },
    });
}

function getusername(userid) {
    // body...
    var userId = userid;
    var userName = 1;
    $.ajax({
        url: "/project//user/getuserinfo.do",
        type: "GET",
        async: false,
        data: {
            "userId": userId,
        },
        beforeSend: function() {},
        complete: function() {},
        success: function(data) {
            if (data.status == 0) {
                console.log("获取材料员姓名成功");
                //处理数据
                var value = data.data;
                userName = value['userName'];
            } else if (data.status == 10) {
                userName = "获取数据失败";
                logininform();
            } else {
                userName = "获取数据失败";
            }
        },
    });
    $(".modal-backdrop").remove();
    return userName;
}

function getaccountInfo() {
    var url = "/project/account/getaccountbyid.do?accountInfoId=" + GetQueryString("accountId");
    $.ajax({
        url: url,
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        beforeSend: function() {},
        complete: function() {},
        success: function(data) {
            if (data.status == 0) {
                console.log("获取财务流水详情信息成功");
                //处理数据
                var value = data.data;
                $("#accountInfoId").html(value['accountInfoId']);
                $("#prePrice").html(value['prePrice']);
                $("#total").html(value['prePrice']);
                $("#accountRelPrice").html(value['accountRelPrice']);
                $("#accountImg").attr("src", value['accountImg']);
                $("#img2").attr("href", value['accountImg']);
                $("#accountImg").attr("style", "width: 100%;height:200px;margin:0 auto");

                $("#username").html("经办人：" + getusername(value['userId']));
                $("#categoryName").html(value['categoryName']);
                $("#accountInfoDec").html(value['accountInfoDec']);
                $("#createTime").html(timestampToTime(value['createTime']));
                $("#checktime").html("审核日期：待审核");

                // $("#num").html(value['number']);
                if (value['state'] == 1) {
                    $("#checkUserName").html(value['checkUserName']);
                    $("#checktime").html("审核日期：" + timestampToTime(value['lastEditTime']));
                    $(".witc").hide();
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取材料信息失败");
            }
        },
    });
}


function getwaitcheckaccount() {
    var pageid = GetQueryString("pageId");
    if (pageid == null) {
        pageid = 1;
    }
    var url;
    console.log(GetQueryString("itemId"));
    if (GetQueryString("itemId") == null) {
        url = "/project/account/unchecklist.do?pageNum=1&pageSize=500";
    } else {
        url = "/project/account/unchecklist.do?pageNum=1&pageSize=500&itemId=" + GetQueryString("itemId");
    }
    $.ajax({
        url: url,
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        beforeSend: function() {
            $("#loadinggif2").show();
        },
        complete: function() {
            $("#loadinggif2").hide();
            $(".waitloading2").show();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取待审核财务流水信息成功");
                //处理数据
                var list = data.data.list;
                if (list.length == 0) {
                    $("#accountlist").after(
                        '<tr><td colspan=6 style="text-align:center">没有任何待审核财务流水记录</td></tr>'
                    );
                } else {
                    var total = 0;
                    for (var z = list.length - 1; z >= 0; z--) {
                        var listz = list[z];
                        $("#accountlist").after(
                            '<tr><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                        );
                        total = total + listz['accountRelPrice'];
                    }
                    $("#objectin").html(total);
                    $("#objectout").html(list.length);
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取材料信息失败");
            }
        },
    });
}

function getcompanyaccountlist() {
    // body...
    var pageid = GetQueryString("pageId");
    if (pageid == null) {
        pageid = 1;
    }
    $.ajax({
        url: "/project/account/getaccountlist.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": pageid,
            "pageSize": 10
        },
        beforeSend: function() {},
        complete: function() {
            $(".waitloading2").show();
            $("#loadinggif2").hide();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取财务流水信息成功");
                //处理分页
                if (!data.data.isFirstPage) {
                    $("#frontitem").attr("href", "?pageId=" + (pageid - 1));
                } else {
                    $("#frontitem").hide();
                }
                if (!data.data.isLastPage) {
                    $("#nextitem").attr("href", "?pageId=" + data.data.nextPage);
                } else {
                    $("#nextitem").hide();
                }
                //处理数据
                var list = data.data.list;
                if (list.length == 0) {
                    $("#accountlist").after(
                        '<tr><td colspan=6 style="text-align:center">没有任何流水记录，如果想产生流水记录，请创建流水账单并且通过审核</td></tr>'
                    );
                } else {
                    switch (userinfo.userType) {
                        case 0:
                            console.log("执行老板布局分配");
                            for (var z = list.length - 1; z >= 0; z--) {
                                var listz = list[z];
                                $("#accountlist").after(
                                    '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                );
                            }
                            break;
                        case 1:
                            console.log("执行项目经理布局分配");
                            for (var z = list.length - 1; z >= 0; z--) {
                                var listz = list[z];
                                $("#accountlist").after(
                                    '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                );
                            }
                            break;
                        case 2:
                            console.log("执行公司财务官布局分配");
                            for (var z = list.length - 1; z >= 0; z--) {
                                var listz = list[z];
                                $("#accountlist").after(
                                    '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                );
                            }
                            break;
                        case 3:
                            console.log("执行项目财务员布局分配");
                            var x = 0;
                            for (var z = list.length - 1; z >= 0; z--) {
                                var listz = list[z];
                                if (listz['userId'] == userinfo.userId) {
                                    x = 1;
                                    $("#accountlist").after(
                                        '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                    );
                                }
                            }

                            if (x == 0) {
                                $("#accountlist").after(
                                    '<tr class="showrow"><td colspan=6 style="text-align:center">没有任何流水记录，如果想产生流水记录，请创建流水账单并且通过审核</td></tr>'
                                );
                            }
                            break;
                        case 4:
                            console.log("执行项目财务审核员布局分配");
                            for (var z = list.length - 1; z >= 0; z--) {
                                var listz = list[z];
                                $("#accountlist").after(
                                    '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                );
                            }
                            break;
                        case 5:
                            console.log("执行项目材料员布局分配");
                            break;
                        case 6:
                            console.log("执行项目材料审核员布局分配");
                            break;
                        case 7:
                            console.log("执行无分配员工布局分配");
                            var x = 0;
                            for (var z = list.length - 1; z >= 0; z--) {
                                var listz = list[z];
                                if (listz['userId'] == userinfo.userId) {
                                    x = 1;
                                    $("#accountlist").after(
                                        '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                    );
                                }
                            }

                            if (x == 0) {
                                $("#accountlist").after(
                                    '<tr class="showrow"><td colspan=6 style="text-align:center">没有任何流水记录，如果想产生流水记录，请创建流水账单并且通过审核</td></tr>'
                                );
                            }
                            break;
                        default:
                    }
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取项目信息失败");
            }
        },
    });
}

function getcompanyaccount() {
    $.ajax({
        url: "/project/account/getaccountitem.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": 1,
            "pageSize": 500
        },
        beforeSend: function() {},
        complete: function() {},
        success: function(data) {
            if (data.status == 0) {
                console.log("获取公司财务信息成功");
                //获得所有项目的财务信息，然后取其中的公司总财务这一项，
                //并填充公司财务信息
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    if (value['itemId'] == null) {
                        $("#objectin").html(value['incomeAccount']);
                        $("#objectout").html(value['payAccount']);
                        $("#objectlast").html((value['incomeAccount'] + value['payAccount']));
                    }
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取项目信息失败");
            }
        },
    });
}

function getmoney(itemId) {
    $.ajax({
        url: "/project/account/getaccountitem.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": 1,
            "pageSize": 500
        },
        beforeSend: function() {},
        complete: function() {},
        success: function(data) {
            if (data.status == 0) {
                console.log("获取项目财务总览成功");
                //处理数据
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    if (itemId == value['itemId']) {
                        $("#objectin").html(value['incomeAccount']);
                        $("#objectout").html(value['payAccount']);
                        $("#objectlast").html((value['incomeAccount'] + value['payAccount']));
                    }
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取项目信息失败");
            }
        },
    });
}

function getmateriallist(itemId) {
    // body...
    $.ajax({
        url: "/project/material/itemlistdetail.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": 1,
            "pageSize": 500
        },
        beforeSend: function() {
            $("#loadinggif3").show();
        },
        complete: function() {
            $("#loadinggif3").hide();
            $(".waitloading3").show();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取材料信息成功");
                //处理数据
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    value['item']['createTime'] = timeFormat(value['item']['createTime']);
                    var list = value['list'];
                    if (itemId == value['item']['itemId']) {
                        if (list.length == 0) {
                            $("#materiallist").after(
                                '<tr><td colspan=6 style="text-align:center">没有任何材料库存记录，如果想记录材料库存，请先产生材料使用和收入流水记录</td></tr>'
                            );
                        } else {
                            for (var z = list.length - 1; z >= 0; z--) {
                                var listz = list[z];
                                listz['createTime'] = timestampToTime(listz['lastEditTime']);
                                $("#materiallist").after(
                                    '<tr><td colspan=2>' + listz['categoryName'] + '</td><td>' + listz['sellStock'] + '</td><td>' + listz['useStock'] + '</td><td colspan=2>' + listz['createTime'] + '</td></tr>'
                                );
                            }
                        }
                    }
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取项目信息失败");
            }
        },
    });
}

function getobjectList(val) {
    var itemId = 1;
    var ifnull = false;
    if (GetQueryString("itemId") == null) {
        ifnull = true;
    } else {
        itemId = GetQueryString("itemId");
    }
    $.ajax({
        url: "/project/item/listitem.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": 1,
            "pageSize": 500
        },
        beforeSend: function() {
            $("#loadinggif1").show();
        },
        complete: function() {
            $("#loadinggif1").hide();
            $(".waitloading1").show();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取项目信息成功");
                //处理数据
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    if (val == 0) {
                        //项目列表数据处理
                        var li = document.createElement("li");
                        var a = document.createElement("a");
                        var itemName = document.createTextNode(value['itemName']);
                        a.href = "object.html?itemId=" + value['itemId'];
                        var itemlist = document.getElementById("itemlist");
                        a.appendChild(itemName);
                        li.appendChild(a);
                        itemlist.appendChild(li);
                    } else {
                        $(".boss").hide();
                    }
                }
                //项目详情数据查找
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    if (val == 0) {
                        if (ifnull) {
                            value = data.data.list[0]
                                //项目详情处理
                            $(".title").html(value['itemName']);
                            $("#objectadminer").html(getusername(value['userId']));
                            $("#objectaccount").html(value['accountUser']);
                            $("#objectaccountcheck").html(value['accountCheckUser']);
                            $("#materialcheck").html(value['materialCheckUser']);
                            $("#materialer").html(value['materialUser']);
                            $("#createtime").html(timeFormat(value['createTime']));
                            $("#endtimes").html(timeFormat(value['endTime']));
                            $("#enddays").html(Math.ceil((value['createTime'] / 1000 - value['endTime'] / 1000) / 60 / 60 / 24));
                            $("#accountadmin").attr("href", "account.html?itemId=" + value['itemId']);
                            $("#materialadmin").attr("href", "material.html?itemId=" + value['itemId']);
                            $("#objectuser").attr("href", "objectuser.html?itemId=" + value['itemId']);
                            $("#frontitem").hide();
                            getmateriallist(value['itemId']);
                            getmoney(value['itemId']);
                            if (1 < data.data.list.length) {
                                value = data.data.list[1];
                                $("#nextitem").attr("href", "object.html?itemId=" + value['itemId']);
                            }
                            break;
                        } else if (value.itemId == itemId) {
                            //项目详情处理
                            $(".title").html(value['itemName']);
                            $("#objectadminer").html(getusername(value['userId']));
                            $("#createtime").html(timeFormat(value['createTime']));
                            $("#endtimes").html(timeFormat(value['endTime']));
                            $("#objectaccount").html(value['accountUser']);
                            $("#objectaccountcheck").html(value['accountCheckUser']);
                            $("#materialcheck").html(value['materialCheckUser']);
                            $("#materialer").html(value['materialUser']);
                            console.log(value['createTime'] / 1000 - value['endTime'] / 1000);
                            $("#enddays").html(Math.ceil((value['createTime'] / 1000 - value['endTime'] / 1000) / 60 / 60 / 24));
                            $("#accountadmin").attr("href", "account.html?itemId=" + value['itemId']);
                            $("#materialadmin").attr("href", "material.html?itemId=" + value['itemId']);
                            $("#objectuser").attr("href", "objectuser.html?itemId=" + value['itemId']);
                            getmoney(value['itemId']);
                            switch (userinfo.userType) {
                                case 0:
                                    console.log("执行老板布局分配");
                                    getmateriallist(value['itemId']);
                                    break;
                                case 1:
                                    console.log("执行项目经理布局分配");
                                    getmateriallist(value['itemId']);
                                    break;
                                case 2:
                                    console.log("执行公司财务官布局分配");
                                    break;
                                case 3:
                                    console.log("执行项目财务员布局分配");
                                    break;
                                case 4:
                                    console.log("执行项目财务审核员布局分配");
                                    break;
                                case 5:
                                    console.log("执行项目材料员布局分配");
                                    getmateriallist(value['itemId']);
                                    break;
                                case 6:
                                    console.log("执行项目材料审核员布局分配");
                                    getmateriallist(value['itemId']);
                                    break;
                                case 7:
                                    console.log("执行无分配员工布局分配");
                                    break;
                                default:
                            }
                            //分页处理
                            if (i + 1 < data.data.list.length) {
                                if (i == 0) {
                                    $("#frontitem").hide();
                                    value = data.data.list[1];
                                    $("#nextitem").attr("href", "object.html?itemId=" + value['itemId']);
                                } else {
                                    value = data.data.list[i + 1];
                                    value2 = data.data.list[i - 1];
                                    $("#nextitem").attr("href", "object.html?itemId=" + value['itemId']);
                                    $("#frontitem").attr("href", "object.html?itemId=" + value2['itemId']);
                                }
                            } else {
                                value = data.data.list[i - 1];
                                $("#frontitem").attr("href", "object.html?itemId=" + value['itemId']);
                                $("#nextitem").hide();
                            }
                        }
                    } else if (value.itemId == val) {
                        $("#accountadmin").attr("href", "account?itemId=" + value['itemId']);
                        $("#materialadmin").attr("href", "material?itemId=" + value['itemId']);
                        $("#objectuser").attr("href", "objectuser?itemId=" + value['itemId']);
                    }
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取员工信息失败");
            }
        },
    });
}

function getcitemuser() {
    var pageid = 1;
    $.ajax({
        url: "/project/user/listableuser.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": 1,
            "pageSize": 500
        },
        // beforeSend: function () {
        //       ShowDiv();
        // },
        // complete: function () {
        //       HiddenDiv();
        // },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取员工信息成功");
                //处理数据
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    if (value['itemId'] == null) {
                        if (value['userType'] == 1) {
                            $("#userId").append(
                                '<option value="' + value['userId'] + '">' + value['userName'] + '</option>'
                            );
                        }
                        if (value['userType'] == 3) {
                            $("#accountUserId").append(
                                '<option value="' + value['userId'] + '">' + value['userName'] + '</option>'
                            );
                        }
                        if (value['userType'] == 4) {
                            $("#accountCheckUserId").append(
                                '<option value="' + value['userId'] + '">' + value['userName'] + '</option>'
                            );
                        }
                        if (value['userType'] == 5) {
                            $("#materialUserId").append(
                                '<option value="' + value['userId'] + '">' + value['userName'] + '</option>'
                            );
                        }
                        if (value['userType'] == 6) {
                            $("#materialCheckUserId").append(
                                '<option value="' + value['userId'] + '">' + value['userName'] + '</option>'
                            );
                        }
                    }
                }
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取员工信息失败");
            }
        },
    });
}

function getuser() {
    // body...
    var pageid = GetQueryString("pageId");
    if (pageid == null) {
        pageid = 1;
    }
    $.ajax({
        url: "/project/user/listableuser.do",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {
            "pageNum": pageid,
            "pageSize": 5
        },
        beforeSend: function() {
            $("#loadinggif1").show();
        },
        complete: function() {
            $("#loadinggif1").hide();
            $(".waitloading1").show();
        },
        success: function(data) {
            if (data.status == 0) {
                console.log("获取员工信息成功");
                $("#totalusernum").html(data.data.total);
                $("#totalpagenum").html(data.data.lastPage);
                $("#nowpage").html(data.data.pageNum);
                var noobjectnum = 0;
                //处理分页
                if (!data.data.isFirstPage) {
                    $("#frontitem").attr("href", "?pageId=" + (pageid - 1));
                } else {
                    $("#frontitem").hide();
                }
                if (!data.data.isLastPage) {
                    $("#nextitem").attr("href", "?pageId=" + data.data.nextPage);
                } else {
                    $("#nextitem").hide();
                }
                //处理数据
                for (var i = 0; i < data.data.list.length; i++) {
                    var value = data.data.list[i];
                    if (value['itemId'] == null) {
                        noobjectnum++;
                    }
                    //项目列表数据处理
                    var itemlist = document.getElementById("userlist");

                    var tr = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var uid = document.createTextNode(value['userId']);
                    td1.appendChild(uid);
                    tr.appendChild(td1);

                    var td2 = document.createElement("td");
                    var img = document.createElement('img');
                    img.src = value['userImg'];
                    img.style.width = "100px";
                    img.style.height = "100px";
                    td2.appendChild(img);
                    tr.appendChild(td2);

                    var td3 = document.createElement("td");
                    var userName = document.createTextNode(value['userName']);
                    td3.appendChild(userName);
                    tr.appendChild(td3);

                    var td4 = document.createElement("td");
                    var usertype = document.createTextNode(getUserType(value['userType']));
                    td4.appendChild(usertype);
                    tr.appendChild(td4);

                    var td5 = document.createElement("td");
                    var createTime = document.createTextNode(timeFormat(value['createTime']));
                    td5.appendChild(createTime);
                    tr.appendChild(td5);

                    var td6 = document.createElement("td");
                    var a = document.createElement("a");
                    var xq = document.createTextNode("详情");
                    a.href = "userinfo.html?userId=" + value['userId'];
                    a.setAttribute('class', 'btn btn-default');
                    a.appendChild(xq);
                    td6.appendChild(a);
                    tr.appendChild(td6);

                    itemlist.appendChild(tr);
                }
                $("#noobjectnum").html(noobjectnum);
            } else if (data.status == 10) {
                console.log("用户未登陆");
                logininform();
            } else {
                console.log("获取员工信息失败");
            }
        },
    });
}

//按钮对接函数
$("button#createitembtn").click(
    function createUser() {
        var formData = new FormData();
        formData.append('itemName', $('#itemName').val());
        formData.append('itemDec', $('#itemDec').val());
        formData.append('userId', $('#userId').val());
        if ($("#accountCheckUserId").val() != "null") {
            formData.append('accountCheckUserId', $("#accountCheckUserId").val());
        }
        if ($("#accountUserId").val() != "null") {
            formData.append('accountUserId', $("#accountUserId").val());
        }
        if ($("#materialUserId").val() != "null") {
            formData.append('materialUserId', $("#materialUserId").val());
        }
        if ($("#materialCheckUserId").val() != "null") {
            formData.append('materialCheckUserId', $("#materialCheckUserId").val());
        }
        var time = Date.parse(new Date()) + ($("#endtime").val() * 24 * 60 * 60 * 1000);
        time = new Date(time);
        var y = time.getFullYear(); //年
        var m = time.getMonth() + 1; //月
        m = m + "";
        if (m.length == 1) {
            m = "0" + m;
        }
        var d = time.getDate(); //日
        formData.append('endTime', y + "-" + m + "-" + d);
        $.ajax({
            url: "/project/item/additem.do",
            cache: false,
            data: formData,
            type: "POST",
            processData: false,
            contentType: false,
            beforeSend: function() {},
            complete: function() {

            },
            success: function(data) { //ajax返回的数据
                if (data.status == '0') {
                    alert("success");
                    $('#newitem').modal('hide');
                    $('#itemlist').html('');
                    getobjectList(0);
                } else {
                    var ele = document.getElementById('change_fail');
                    ele.style.display = "block";
                    myFadeout(ele);
                    var t1 = window.setTimeout("alertfail()", 4000);
                }
            }
        });
        return false;
    }
);

$("button#createshourubtn").click(
    function createUser() {
        var formData = new FormData();
        if (GetQueryString("itemId") != null) {
            formData.append('itemId', GetQueryString("itemId"));
        }
        formData.append('categoryName', $("#categoryName").val());
        if ($("#accountInfoCode").val() == "") {
            formData.append('accountInfoCode', userinfo.accountInfoCode);
        } else {
            formData.append('accountInfoCode', $("#accountInfoCode").val());
        }
        formData.append('prePrice', "-" + $("#prePrice").val());
        formData.append('accountRelPrice', "-" + $("#accountRelPrice").val());
        formData.append('accountInfoDec', $("#accountInfoDec").val());
        formData.append('upload_file', $('#upload_file')[0].files[0]);
        $.ajax({
            url: "/project/account/addaccount.do",
            cache: false,
            type: "post",
            data: formData,
            processData: false,
            contentType: false,
            beforeSend: function() {},
            complete: function() {},
            success: function(data) { //ajax返回的数据
                if (data.status == '0') {
                    // $("#materiallist").html("");
                    // $("#pages").html("");
                    $('#myModal3').modal('hide');
                    // getmaterial()
                    alert('创建成功');
                    // getuser();
                } else {
                    alert("创建失败！");
                }
            }
        });
        return false;
    }
);

$("button#createzhichubtn").click(
    function createUser() {
        var formData = new FormData();
        if (GetQueryString("itemId") != null) {
            formData.append('itemId', GetQueryString("itemId"));
        }
        formData.append('categoryName', $("#categoryName2").val());
        if ($("#accountInfoCode").val() == "") {
            formData.append('accountInfoCode', "0");
        } else {
            formData.append('accountInfoCode', "0");
        }
        formData.append('prePrice', $("#prePrice2").val());
        formData.append('accountRelPrice', $("#prePrice2").val());
        formData.append('accountInfoDec', $("#accountInfoDec2").val());
        formData.append('upload_file', $('#upload_file2')[0].files[0]);
        $.ajax({
            url: "/project/account/addaccount.do",
            cache: false,
            type: "post",
            data: formData,
            processData: false,
            contentType: false,
            beforeSend: function() {},
            complete: function() {},
            success: function(data) { //ajax返回的数据
                if (data.status == '0') {
                    // $("#materiallist").html("");
                    // $("#pages").html("");
                    $('#myModal4').modal('hide');
                    // getmaterial()
                    alert('创建成功');
                    // getuser();
                } else {
                    alert("创建失败！");
                }
            }
        });
        return false;
    }
);

$("#checkaccountlbtn").click(
    function createUser() {
        $.ajax({
            url: "/project/account/checkconfirm.do?accountInfoId=" + GetQueryString("accountId"),
            cache: false,
            type: "get",
            processData: false,
            contentType: false,
            beforeSend: function() {},
            complete: function() {},
            success: function(data) { //ajax返回的数据
                if (data.status == '0') {
                    alert("审核成功！");
                    window.location.href = document.referrer;
                    getInfo();
                    // getuser();
                } else {
                    alert("审核失败！");
                }
            }
        });
        return false;
    }
);

$("button#createshourubtn1").click(
    function createUser() {
        var formData = new FormData();
        formData.append('categoryName', $("#materiallist").val());
        formData.append('offerId', $("#companylist").val());
        formData.append('itemId', GetQueryString('itemId'));
        formData.append('sellerName', $("#sellerName").val());
        formData.append('unitPrice', $("#unitPrice").val());
        formData.append('number', $("#number").val());
        formData.append('upload_file', $('#imgupload')[0].files[0]);
        $.ajax({
            url: "/project/material/buymaterial.do",
            cache: false,
            type: "post",
            data: formData,
            processData: false,
            contentType: false,
            beforeSend: function() {
                ShowDiv();
            },
            complete: function() {
                HiddenDiv();
            },
            success: function(data) { //ajax返回的数据
                if (data.status == '0') {
                    // $("#materiallist").html("");
                    // $("#pages").html("");
                    // $('#myModal3').modal('hide');
                    // getmaterial()
                    alert('创建成功');
                    // getuser();
                } else {
                    alert("创建失败！");
                }
            }
        });
        return false;
    }
);

$("button#createshourubtn2").click(
    function createUser() {
        var a = $("#number2").val();
        var b = $("#lastnum").val();
        console.log(a);
        console.log(b);
        if (a > b) {
            alert("超过库存！");
            return false;
        } else {
            cteartliushui();
        }
    }
);
$("button#createcompanybtn").click(
    function createUser() {
        var formData = new FormData();
        formData.append('offerPhone', $("#offerPhone").val());
        formData.append('address', $("#address").val());
        formData.append('offerCompany', $("#offerCompany").val());
        $.ajax({
            url: "/project/offerer/addofferer.do",
            cache: false,
            type: "post",
            data: formData,
            processData: false,
            contentType: false,
            beforeSend: function() {},
            complete: function() {},
            success: function(data) { //ajax返回的数据
                if (data.status == '0') {
                    $("#userlist").html("");
                    $('#newUser').modal('hide');
                    getsupply()
                        // getuser();
                } else {
                    alert("创建失败！");
                }
            }
        });
        return false;
    }
);
$("button#creatematerialbtn").click(
    function createUser() {
        var formData = new FormData();
        formData.append('categoryName', $("#materialname").val());
        $.ajax({
            url: "/project/category/addcategory.do",
            cache: false,
            type: "post",
            data: formData,
            processData: false,
            contentType: false,
            beforeSend: function() {},
            complete: function() {},
            success: function(data) { //ajax返回的数据
                if (data.status == '0') {
                    $("#userlist").html("");
                    $('#newUser').modal('hide');
                    getmaterialdy()
                        // getuser();
                } else {
                    alert("创建失败！");
                }
            }
        });
        return false;
    }
);

function getsearchname() {
    // body...
    var text = $("#searchuserName").val();
    if (text == "") {
        getuser();
        return;
    } else {
        $.ajax({
            url: "/project/user/getuserbyname.do?userName=" + text,
            cache: false,
            type: "get",
            processData: false,
            contentType: false,
            beforeSend: function() {},
            complete: function() {},
            success: function(data) { //ajax返回的数据
                if (data.status == '0') {
                    $("#userlist").html("");
                    //处理数据
                    var noobjectnum = 0;
                    for (var i = 0; i < data.data.length; i++) {
                        var value = data.data[i];
                        if (value['itemId'] == null) {
                            noobjectnum++;
                        }
                        //项目列表数据处理
                        var itemlist = document.getElementById("userlist");

                        var tr = document.createElement("tr");
                        var td1 = document.createElement("td");
                        var uid = document.createTextNode(value['userId']);
                        td1.appendChild(uid);
                        tr.appendChild(td1);

                        var td2 = document.createElement("td");
                        var img = document.createElement('img');
                        img.src = value['userImg'];
                        img.style.width = "100px";
                        img.style.height = "100px";
                        td2.appendChild(img);
                        tr.appendChild(td2);

                        var td3 = document.createElement("td");
                        var userName = document.createTextNode(value['userName']);
                        td3.appendChild(userName);
                        tr.appendChild(td3);

                        var td4 = document.createElement("td");
                        var usertype = document.createTextNode(getUserType(value['userType']));
                        td4.appendChild(usertype);
                        tr.appendChild(td4);

                        var td5 = document.createElement("td");
                        var createTime = document.createTextNode(timeFormat(value['createTime']));
                        td5.appendChild(createTime);
                        tr.appendChild(td5);

                        var td6 = document.createElement("td");
                        var a = document.createElement("a");
                        var xq = document.createTextNode("详情");
                        a.href = "userinfo.html?userId=" + value['userId'];
                        a.setAttribute('class', 'btn btn-default');
                        a.appendChild(xq);
                        td6.appendChild(a);
                        tr.appendChild(td6);

                        itemlist.appendChild(tr);
                    }
                    // getuser();
                } else {
                    alert("创建失败！");
                }
            }
        });
        return false;
    }
}

$("button.searchbytime").click(
    function getsearchname() {
        // body...
        var text = $("#date_range1").val();
        if (text == "") {
            alert("请选择检索时间范围");
            return;
        } else {
            console.log("检索范围+" + text);
            var arr = text.split(" - ");
            if (arr[0] == arr[1]) {
                var startTime = changetime(arr[0]);
                var endTime = changetime(arr[0], "now");
            } else {
                var startTime = changetime(arr[0]);
                var endTime = changetime(arr[1]);
            }
            console.log("检索范围+" + startTime);
            console.log("检索范围+" + endTime);

            if (GetQueryString("itemId")) {
                var url = "/project/account/getaccountlistbytime.do?startTime=" + startTime + "&endTime=" + endTime + "&itemId=" + GetQueryString("itemId");
            } else {
                var url = "/project/account/getaccountlistbytime.do?startTime=" + startTime + "&endTime=" + endTime;
            }

            $.ajax({
                url: url,
                cache: false,
                type: "get",
                processData: false,
                contentType: false,
                beforeSend: function() {},
                complete: function() {},
                success: function(data) { //ajax返回的数据
                    if (data.status == '0') {
                        $(".showrow").remove();
                        //处理数据
                        var list = data.data;
                        if (list.length == 0) {
                            $("#accountlist").after(
                                '<tr class="showrow"><td colspan=6 style="text-align:center">没有任何流水记录，如果想产生流水记录，请创建流水账单并且通过审核</td></tr>'
                            );
                        } else {
                            switch (userinfo.userType) {
                                case 0:
                                    console.log("执行老板布局分配");
                                    for (var z = list.length - 1; z >= 0; z--) {
                                        var listz = list[z];
                                        $("#accountlist").after(
                                            '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                        );
                                    }
                                    break;
                                case 1:
                                    console.log("执行项目经理布局分配");
                                    for (var z = list.length - 1; z >= 0; z--) {
                                        var listz = list[z];
                                        $("#accountlist").after(
                                            '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                        );
                                    }
                                    break;
                                case 2:
                                    console.log("执行公司财务官布局分配");
                                    for (var z = list.length - 1; z >= 0; z--) {
                                        var listz = list[z];
                                        $("#accountlist").after(
                                            '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                        );
                                    }
                                    break;
                                case 3:
                                    console.log("执行项目财务员布局分配");
                                    var x = 0;
                                    for (var z = list.length - 1; z >= 0; z--) {
                                        var listz = list[z];
                                        if (listz['userId'] == userinfo.userId) {
                                            x = 1;
                                            $("#accountlist").after(
                                                '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                            );
                                        }
                                    }

                                    if (x == 0) {
                                        $("#accountlist").after(
                                            '<tr class="showrow"><td colspan=6 style="text-align:center">没有任何流水记录，如果想产生流水记录，请创建流水账单并且通过审核</td></tr>'
                                        );
                                    }
                                    break;
                                case 4:
                                    console.log("执行项目财务审核员布局分配");
                                    for (var z = list.length - 1; z >= 0; z--) {
                                        var listz = list[z];
                                        $("#accountlist").after(
                                            '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                        );
                                    }
                                    break;
                                case 5:
                                    console.log("执行项目材料员布局分配");
                                    break;
                                case 6:
                                    console.log("执行项目材料审核员布局分配");
                                    break;
                                case 7:
                                    console.log("执行无分配员工布局分配");
                                    var x = 0;
                                    for (var z = list.length - 1; z >= 0; z--) {
                                        var listz = list[z];
                                        if (listz['userId'] == userinfo.userId) {
                                            x = 1;
                                            $("#accountlist").after(
                                                '<tr class="showrow"><td>' + getusername(listz['userId']) + '</td><td>' + listz['checkUserName'] + '</td><td>' + listz['accountInfoDec'] + '</td><td>' + listz['accountRelPrice'] + '</td><td>' + timestampToTime(listz['lastEditTime']) + '</td><td><a class="btn btn-default" href="accountinfo.html?accountId=' + listz['accountInfoId'] + '">详情</a></td></tr>'
                                            );
                                        }
                                    }

                                    if (x == 0) {
                                        $("#accountlist").after(
                                            '<tr class="showrow"><td colspan=6 style="text-align:center">没有任何流水记录，如果想产生流水记录，请创建流水账单并且通过审核</td></tr>'
                                        );
                                    }
                                    break;
                                default:
                            }
                        }
                    } else {
                        alert("创建失败！");
                    }
                }
            });
            return false;
        }
    }
);

$("button.searchmaterialbytime").click(
    function getsearchname() {
        // body...
        var text = $("#date_range1").val();
        if (text == "") {
            alert("请选择检索时间范围");
            return;
        } else {
            console.log("检索范围+" + text);
            var arr = text.split(" - ");
            if (arr[0] == arr[1]) {
                var startTime = changetime(arr[0]);
                var endTime = changetime(arr[0], "now");
            } else {
                var startTime = changetime(arr[0]);
                var endTime = changetime(arr[1]);
            }
            console.log("检索范围+" + startTime);
            console.log("检索范围+" + endTime);

            if (GetQueryString("itemId")) {
                var url = "/project/material/getmaterialbytime.do?startTime=" + startTime + "&endTime=" + endTime + "&itemId=" + GetQueryString("itemId");
            }

            $.ajax({
                url: url,
                cache: false,
                type: "get",
                processData: false,
                contentType: false,
                beforeSend: function() {
                    $(".showrow").remove();
                    $("#loadinggif1").after(
                        '<tr class="showrow"><td colspan="8">正在搜索中</td></tr>'
                    );
                },
                complete: function() {},
                success: function(data) { //ajax返回的数据
                    if (data.status == '0') {
                        $(".showrow").remove();
                        //处理数据
                        //处理数据
                        console.log(data.data.length);
                        if (data.data.length != 0) {
                            for (var i = 0; i < data.data.length; i++) {
                                var value = data.data[i];
                                console.log(value);
                                //项目列表数据处理
                                console.log('<tr><td>' + value['id'] + '</td><td>' + getusername(value['userId']) + '</td><td>' + value['checkUserName'] + '</td><td>' + value['type'] + '</td><td>' + value['number'] + '</td><td>' + value['categoryName'] + '</td><td>' + value['lastEditTime'] + '</td><td><a class="btn btn-success" href="materialinfo.html?id=' + value['id'] + '">详情</a></td></tr>');
                                $("#loadinggif1").after(
                                    '<tr class="showrow"><td>' + value['id'] + '</td><td>' + getusername(value['userId']) + '</td><td>' + value['checkUserName'] + '</td><td>' + value['type'] + '</td><td>' + value['number'] + '</td><td>' + value['categoryName'] + '</td><td>' + value['lastEditTime'] + '</td><td><a class="btn btn-success" href="materialinfo.html?id=' + value['id'] + '">详情</a></td></tr>'
                                );
                            }
                        } else {
                            $("#loadinggif1").after(
                                '<tr class="showrow"><td colspan="8">没有查询到该时间范围材料流水数据</td></tr>'
                            );
                        }

                    } else {
                        alert("创建失败！");
                    }
                }
            });
            return false;
        }
    }
);