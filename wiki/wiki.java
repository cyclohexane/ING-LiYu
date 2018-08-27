//api
http://193.112.26.167:8080/project/

//userType 通过下拉列表传过来int参数 
BOSS(0, "老板"),
MANAGER(1, "项目经理"),
FINANCIAL(2, "公司财务管理员"),
ACCOUNT_UPLOAD(3, "记账员"),
ACCOUNT_CHECKED(4, "财务审核员"),
MATERIAL_UPLOAD(5, "材料员"),
MATERIAL_CHECKED(6, "材料审核员"),
EMPLOYEE(7, "普通员工");

//img
    <form name = "form1" action = "/project/user/adduser.do" method = "post" enctype = "multipart/form-data">
        <input type = "file" name = "upload_file" / >
        <input type = "submit" value = "springmvc上传文件" / >
    </form>

//个人

Cookie:
    userinfo
    [{"userId": 1,
    "userName": "王文超",
    "password": "147258",
    "phone": "15927287429",
    "state": 1,
    "userType": 0,
    "itemId": 23,
    "accountInfoCode": "1"}]

【登录】user/login.do【userName, password】
fail{
    "status": 1,
    "msg": "请输入用户名或密码/账号或密码错误/账号未激活"
}
success {
    "status": 0,
    "data": {
        "userId": 1,
        "userName": "王文超",
        "password": "147258",
        "phone": "15927287429",
        "state": 1,
        "userType": 0,
        "itemId": null,
        "createTime": 1532879000000,
        "lastEditTime": 1532887169000,
        "userImg": "111"
    }
}

【待操作事项】user/undeal.do

【获得进账出账金额净利润金额的接口】user/getaccountbyuserid.do
//（返回值有当天（ 当月） 的进账， 出账四个值）

【查看个人信息】user/getuserinfo.do【userId】

【更新自己信息】user/updatemyself.do

【注销】user/logout.do

//人事

【根据id获得用户资料】user/getUserinfoByid.do【id】
fail {
    "status": 1,
    "msg": "用户id错误，不存在该用户"
}
success {
    "status": 0,
    "data": {
        {
            "userId": 1,
            "userName": "王文超",
            "password": "147258",
            "phone": "15927287429",
            "state": 1,
            "userType": 0,
            "itemId": null,
            "createTime": 1532879000000,
            "lastEditTime": 1532887169000,
            "userImg": "111"
        },
    }
}

【根据用户名查询用户】user/getuserbyname.do【userName】

【添加用户】user/adduser.do【userName, password, phone, userType，img】
fail{
    "status": 10,
    "msg": "需要登入管理员账户"
} {
    "status": 1,
    "msg": "操作失败"
}
success {
    "status": 0,
    "msg": "操作成功"
}

【激活用户列表】user/listableuser.do【无】
fail {
    "status": 10,
    "msg": "需要登入管理员账户"
}
success {
    status: 0,
    data: [{
            userId: 1,
            userName: "王文超",
            password: "147258",
            phone: "15927287429",
            state: 1,
            userType: 0,
            itemId: null,
            createTime: 1532879000000,
            lastEditTime: 1532879005000,
            userImg: "111"
        },
        {
            userId: 2,
            userName: "test",
            password: "147258",
            phone: "15927287429",
            state: 1,
            userType: 1,
            itemId: null,
            createTime: null,
            lastEditTime: null,
            userImg: "http://img.upupgogogo.cn/4561d912-ce12-438b-acee-5241d25c9b40.JPG"
        }
    ]
}

【未激活用户列表】user/listunableuser.do【无】
fail {
    "status": 10,
    "msg": "需要登入管理员账户"
}
success {
    status: 0,
    data: [{
            userId: 1,
            userName: "王文超",
            password: "147258",
            phone: "15927287429",
            state: 0,
            userType: 0,
            itemId: null,
            createTime: 1532879000000,
            lastEditTime: 1532879005000,
            userImg: "111"
        },
        {
            userId: 2,
            userName: "test",
            password: "147258",
            phone: "15927287429",
            state: 0,
            userType: 1,
            itemId: null,
            createTime: null,
            lastEditTime: null,
            userImg: "http://img.upupgogogo.cn/4561d912-ce12-438b-acee-5241d25c9b40.JPG"
        }
    ]
}

【修改用户权限（删除用户，也就是修改状态）】user/updateuser.do【state(userType)】
fail {
    "status": 10,
    "msg": "需要登入管理员账户"
}
{
    "status": 1,
    "msg": "操作失败"
}
success {
    "status": 0,
    "msg": "操作成功"
}


//材料


【购买材料】material/buymaterial.do【categoryName, itemId, offerId, sellerName, (upload_file), unitPrice, number】
//categoryName和offerId都是通过调用对于的list接口获得然后选择中传给后台，itemId直接在前台调用个人信息来获得
//这个需要这个用户属于该项目的材料员权限
fail {
    "status": 1,
    "data": "权限不够"
}
success {
    "status": 0,
    "data": "权限不够"
}

【获得所有项目材料信息】/material/getAllItem.do【page】
//page为分页参数，传过来1表示第一页，查询前面10个记录，为2表示查询10-20的记录
fail {
    "status": 1,
    "msg": "不存在任何项目"
}
success {
    "status": 0,
    "data": {
        {
            "itemId": 1,
            "itemName": "项目名",
            "material": {
                {
                    "materialStockId";
                    "categoryName";
                    "sellStock";
                    "useStock";
                    "createTime";
                    "lastEditTime";
                },
                {
                    "materialStockId";
                    "categoryName";
                    "sellStock";
                    "useStock";
                    "createTime";
                    "lastEditTime";
                }
            }
        },
        {
            "itemId": 1,
            "itemName": "项目名",
            "material": {
                {
                    "materialStockId";
                    "categoryName";
                    "sellStock";
                    "useStock";
                    "createTime";
                    "lastEditTime";
                },
                {
                    "materialStockId";
                    "categoryName";
                    "sellStock";
                    "useStock";
                    "createTime";
                    "lastEditTime";
                }
            }
        },
    }
}

【获得某项目材料库存详情内容】material/getMaterialinfoByid.do【page,id（项目id）】
fail {
    "status": 1,
    "msg": "该项目不存在任何材料"
}
success {
    "status": 0,
    "data": {
        {
            "materialStockId";
            "categoryName";
            "sellStock";
            "useStock";
            "createTime";
            "lastEditTime";
        },
        {
            "materialStockId";
            "categoryName";
            "sellStock";
            "useStock";
            "createTime";
            "lastEditTime";
        }
    }
}
【获得某项目材料流水详情内容】material/getMaterialbuyinfoByid.do【page,id（项目id）】
fail {
    "status": 1,
    "msg": "该项目不存在任何材料流水记录"
}
success {
    "status": 0,
    "data": {
        "materialInfoId";
        "categoryName";
        "userId";
        "number";
        "type"：
        这一项表示是消耗材料， 还是进材料;
        "state";
        "checkUserName";
        "createTime";
        "lastEditTime";
    },
    {
        "materialInfoId";
        "categoryName";
        "userId";
        "number";
        "type"：
        这一项表示是消耗材料， 还是进材料;
        "state";
        "checkUserName";
        "createTime";
        "lastEditTime";
    }
}
}

【根据材料流水id获得材料流水资料】material/getMaterialbuyinfooneByid.do【id（材料流水id）】
fail {
    "status": 1,
    "msg": "材料流水id错误，不存在该材料流水"
}
success {
    "status": 0,
    "data": {
        "materialInfoId";
        "categoryName";
        "userId";
        "number";
        "type"：
        这一项表示是消耗材料， 还是进材料;
        "state";
        "checkUserName";
        "createTime";
        "lastEditTime";
    }
}
【创建材料流水】accountInfo/createAccount.do
request {
    "materialInfoId";
    "categoryName";
    "userId";
    "number";
    "type":"这一项表示是消耗材料， 还是进材料";
    "state";
    "checkUserName";
    "createTime";
    "lastEditTime";
    "itemId";
    "offerId"; //这个什么意思
    "sellerName";
    "unitPrice";
    "totalPrice";
}
fail {
    "status": 1,
    "msg": "创建材料流水出错"
}
success {
    "status": 0,
    "msg": "创建材料流水成功"
}

【添加材料分类】category / addcategory.do【categoryName】
fail {
    "status": 1,
    "data": "权限不够/已经存在分类名字"
}
success {
    "status": 0,
    "data": "添加成功"
}

【材料分类列表】category / categorylist.do【无】
fail {
    "status": 1,
    "data": "权限不够"
}
success {
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 5,
        "size": 1,
        "orderBy": null,
        "startRow": 1,
        "endRow": 1,
        "total": 1,
        "pages": 1,
        "list": [
            { "categoryId": 2, "categoryName": "22", "priority": null, "createTime": 1533536231000, … }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
}

【删除材料分类】category / deletecategory.do【categoryId】
fail {
    "status": 1,
    "data": "权限不够/删除失败"
}
success {
    "status": 0,
    "data": "删除成功"
}

【更新材料分类】category/deletecategory.do【categoryId， categoryName】
fail {
    "status": 1,
    "data": "权限不够/更新失败"
}
success {
    "status": 0,
    "data": "更新成功"
}

【待审核材料收入流水】material/uncheckbuylist.do【项目id】

【待审核材料使用流水】material/uncheckuselist.do【项目id】

【根据id获得材料流水详情】material/materialdetail.do【材料id】

【材料列表】material/materiallist.do

【根据时间查询材料流水】material/getmaterialbytime.do【startTime,endTime】

//供应商

【添加供货商】offerer/addofferer.do【offerCompany, address, offerPhone】
fail {
    "status": 1,
    "data": "权限不够/已经存在公司名字"
}
success {
    "status": 0,
    "data": "添加成功"
}

【供货商列表】offerer/offererlist.do【无】
fail {
    "status": 1,
    "data": "权限不够"
}
success {
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 5,
        "size": 1,
        "orderBy": null,
        "startRow": 1,
        "endRow": 1,
        "total": 1,
        "pages": 1,
        "list": [
            { "offerId": 2, "offerCompany": "test1", "offerPhone": null, "address": "test", … }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
}

【删除供货商】offerer/deleteofferer.do【offerId】
fail {
    "status": 1,
    "data": "权限不够/删除失败"
}
success {
    "status": 0,
    "data": "删除成功"
}

【更新供货商】offerer / updateofferer.do【offerId, offerCompany, offerAddress】
fail {
    "status": 1,
    "data": "权限不够/更新失败"
}
success {
    "status": 0,
    "data": "更新成功"
}

//项目、财务

【未审核列表】account/unchecklist.do【pageSize, pageNum, itemId】
//不传itemId时表示公司未审核的财务列表

【审核】account/checkconfirm.do【accountInfoId】

【未确认列表】account / userlist.do【pageSize, pageNum, itemId】
//只有支出需要确认， 也就是accountRelPrice为负
//不传项目时表示该用户的需要确认的列表

【确认】account/userconfirm.do【accountInfoId】

【添加支出或收入流水】account/addaccount.do
//通过款项的正负判断
    //1.公司个人财务
request
categoryName， accountInfoCode(卡号， 选填), upload_file(图片)， prePrice, accountRelPrice, accountInfoDec(详情， 选填)
    //2.项目个人财务
request
categoryName， itemId, accountInfoCode(卡号， 选填), upload_file(图片)， prePrice, accountRelPrice, accountInfoDec(详情， 选填)
    //3.项目材料财务
request
materialInfoId, accountInfoCode(卡号， 选填), upload_file(图片)， prePrice, accountRelPrice, accountInfoDec(详情， 选填)

【获取项目对应权限的用户（ 该用户不属于任意项目）】item/getuserforcheck.do【userType(用户权限)】
fail {
    "status": 1,
    "msg"："参数错误/权限不够"
}
success { //（返回的是一个list集合，封装的UserVo,只包含id和name）
    "status": 0,
    "data": [{
        "userId": 2,
        "userName": "test"
    }]
}

【新建项目】item / additem.do【userId, accountUserId, accountCheckUserId, materialUserId, materialCheckUserId, itemDec, itemName, endTime】
fail {
    "status": 1,
    "msg"："参数错误/权限不够"
}
success {
    "status": 0,
    "data": "新建项目成功"
}

【查看项目列表】【item/listitem.do】
//根据权限返回对应的项目列表， 老板权限返回所有，项目经理只返回所对应项目
fail {
    "status": 1,
    "msg":"权限不够"
}
success { //这里返回的是ItemVo只封装了四个属性，根据开始时间和结束时间显示进度条
    "status": 0,
    "data": {
        "pageNum": 1,
        "pageSize": 5,
        "size": 2,
        "orderBy": null,
        "startRow": 1,
        "endRow": 2,
        "total": 2,
        "pages": 1,
        "list": [{
                "itemId": 17,
                "itemName": "xxxx",
                "createTime": 1533306543000,
                "endTime": 1532102400000
            },
            {
                "itemId": 18,
                "itemName": "xxxxx",
                "createTime": 1533307160000,
                "endTime": 1532102400000
            }
        ],
        "firstPage": 1,
        "prePage": 0,
        "nextPage": 0,
        "lastPage": 1,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ]
    }
}

【项目信息和库存信息】item/itemdetail.do【项目id】

【根据财务id获得财务流水详情】account/getaccountbyid.do【财务id】

【获得所有的财务流水列表】account/getaccountitem.do

【根据项目id获得财务流水列表】account/getaccountlist.do【pageSize, pageNum, itemId】
//没有传id表示公司流水

【根据时间查询财务流水】account/getaccountlistbytime.do【startTime,endTime】
