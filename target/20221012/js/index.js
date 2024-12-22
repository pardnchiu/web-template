(function () {
    /**
     * 假資料
     */
    var authSample = {
        head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
        uid: "pardnchiu",
        name: "Pardn Chiu",
        cv: "這是一個仿 Instagram 的模板<br>純靜態展示，歡迎下載使用",
        link: "https://joball.tw/@pardnltd",
        total: {
            post: 0,
            follower: 0,
            following: 0
        },
        storys: [
            { cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample", title: "動態1", isNew: true },
            { cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample", title: "動態2", isNew: true },
            { cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample", title: "動態3", isNew: false },
            { cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample", title: "動態4", isNew: false },
            { cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample", title: "動態5", isNew: false }
        ]
    };
    var userSample1 = {
        head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
        uid: "damin_wang",
        name: "王大明",
        cv: "個人簡介範例個人簡介範例個人簡介範例個人簡介範例",
        link: "",
        total: {
            post: 0,
            follower: 0,
            following: 0
        },
        storys: []
    };
    var userSample2 = {
        head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
        uid: "huahua.chen",
        name: "陳小華",
        cv: "個人簡介範例個人簡介範例個人簡介範例個人簡介範例",
        link: "",
        total: {
            post: 0,
            follower: 0,
            following: 0
        },
        storys: []
    };
    var userSample3 = {
        head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
        uid: "loyaltylin",
        name: "林中心",
        cv: "個人簡介範例個人簡介範例個人簡介範例個人簡介範例",
        link: "",
        total: {
            post: 0,
            follower: 0,
            following: 0
        },
        storys: []
    };
    var userSample4 = {
        head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
        uid: "rich_wu",
        name: "吳凱",
        cv: "個人簡介範例個人簡介範例個人簡介範例個人簡介範例",
        link: "",
        total: {
            post: 0,
            follower: 0,
            following: 0
        },
        storys: []
    };
    var userSample5 = {
        head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
        uid: "heart.chang",
        name: "張心",
        cv: "個人簡介範例個人簡介範例個人簡介範例個人簡介範例",
        link: "",
        total: {
            post: 0,
            follower: 0,
            following: 0
        },
        storys: []
    };
    authSample.follower = [userSample1, userSample2, userSample3, userSample4, userSample5];
    authSample.following = [userSample1, userSample2, userSample3, userSample4, userSample5];
    userSample1.follower = [userSample2];
    userSample1.following = [userSample2, authSample];
    userSample2.follower = [userSample1];
    userSample2.following = [userSample1, authSample];
    userSample3.follower = [userSample4, userSample1, userSample2];
    userSample3.following = [userSample5, authSample];
    userSample4.follower = [userSample5];
    userSample4.following = [userSample3, authSample];
    userSample5.follower = [userSample3];
    userSample5.following = [userSample4];
    var commentSample1 = {
        user: userSample1,
        description: "留言範例留言範例留言範例留言範例留言範例",
        updated: "1天前"
    };
    var commentSample2 = {
        user: userSample2,
        description: "留言範例留言範例留言範例留言範例留言範例",
        updated: "1天前"
    };
    var commentSample3 = {
        user: userSample3,
        description: "留言範例留言範例留言範例留言範例留言範例",
        updated: "1天前"
    };
    var commentSample4 = {
        user: userSample4,
        description: "留言範例留言範例留言範例留言範例留言範例",
        updated: "1天前"
    };
    var commentSample5 = {
        user: userSample5,
        description: "留言範例留言範例留言範例留言範例留言範例",
        updated: "1天前"
    };
    var photoPostSample = "圖片範例<br>圖片範例圖片範例圖片範例<br>圖片範例圖片範例圖片範例圖片範例圖片範例<br><br><a>標籤範例1</a> <a>標籤範例2</a> <a>標籤範例3</a>";
    var postsSample = [
        {
            auth: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: [
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample"
            ],
            description: photoPostSample,
            total: { good: 2, comment: 0 },
            comments: [commentSample1, commentSample2],
            goods: [userSample1, userSample2],
            updated: "1天前"
        },
        {
            auth: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: ["https://fakeimg.pl/1024/282828/eae0d0/?text=sample"],
            description: photoPostSample,
            total: { good: 1, comment: 1 },
            comments: [commentSample5],
            goods: [userSample3],
            updated: "1天前"
        },
        {
            auth: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: [
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample"
            ],
            description: photoPostSample,
            total: { good: 0, comment: 0 },
            comments: [],
            goods: [],
            updated: "1天前"
        },
        {
            auth: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: ["https://fakeimg.pl/1024/282828/eae0d0/?text=sample",],
            description: photoPostSample,
            total: { good: 1, comment: 3 },
            comments: [commentSample5, commentSample4, commentSample2],
            goods: [userSample3, userSample4],
            updated: "1天前"
        },
        {
            auth: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: [
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample"
            ],
            description: photoPostSample,
            total: { good: 2, comment: 1 },
            comments: [commentSample1, commentSample3],
            goods: [userSample5, userSample2],
            updated: "1天前"
        },
        {
            auth: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: ["https://fakeimg.pl/1024/282828/eae0d0/?text=sample"],
            description: photoPostSample,
            total: { good: 0, comment: 1 },
            comments: [commentSample5],
            goods: [],
            updated: "1天前"
        },
        {
            auth: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: ["https://fakeimg.pl/1024/282828/eae0d0/?text=sample"],
            description: photoPostSample,
            total: { good: 1, comment: 0 },
            comments: [],
            goods: [userSample4],
            updated: "1天前"
        },
        {
            auth: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: ["https://fakeimg.pl/1024/282828/eae0d0/?text=sample"],
            description: photoPostSample,
            total: { good: 0, comment: 1 },
            comments: [commentSample2],
            goods: [],
            updated: "1天前"
        },
        {
            auth: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: [
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample"
            ],
            description: photoPostSample,
            total: { good: 1, comment: 0 },
            comments: [],
            goods: [userSample2, userSample3],
            updated: "1天前"
        },
        {
            auth: userSample4,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: [
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample"
            ],
            description: photoPostSample,
            total: { good: 2, comment: 0 },
            comments: [commentSample1, commentSample2],
            goods: [authSample, userSample2],
            updated: "1天前"
        },
        {
            auth: userSample1,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: ["https://fakeimg.pl/1024/282828/eae0d0/?text=sample"],
            description: photoPostSample,
            total: { good: 1, comment: 1 },
            comments: [commentSample5],
            goods: [userSample3],
            updated: "1天前"
        },
        {
            auth: userSample1,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: [
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample"
            ],
            description: photoPostSample,
            total: { good: 0, comment: 0 },
            comments: [],
            goods: [],
            updated: "1天前"
        },
        {
            auth: userSample2,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: ["https://fakeimg.pl/1024/282828/eae0d0/?text=sample"],
            description: photoPostSample,
            total: { good: 1, comment: 3 },
            comments: [commentSample5, commentSample4, commentSample3],
            goods: [userSample3, userSample4],
            updated: "1天前"
        },
        {
            auth: userSample2,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: [
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample"
            ],
            description: photoPostSample,
            total: { good: 2, comment: 1 },
            comments: [commentSample1, commentSample3],
            goods: [authSample, userSample2],
            updated: "1天前"
        },
        {
            auth: userSample3,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: ["https://fakeimg.pl/1024/282828/eae0d0/?text=sample"],
            description: photoPostSample,
            total: { good: 0, comment: 1 },
            comments: [commentSample5],
            goods: [],
            updated: "1天前"
        },
        {
            auth: userSample4,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: ["https://fakeimg.pl/1024/282828/eae0d0/?text=sample"],
            description: photoPostSample,
            total: { good: 1, comment: 0 },
            comments: [],
            goods: [userSample4],
            updated: "1天前"
        },
        {
            auth: userSample5,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: ["https://fakeimg.pl/1024/282828/eae0d0/?text=sample"],
            description: photoPostSample,
            total: { good: 0, comment: 1 },
            comments: [commentSample2],
            goods: [],
            updated: "1天前"
        },
        {
            auth: userSample5,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            photos: [
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            ],
            description: photoPostSample,
            total: { good: 1, comment: 0 },
            comments: [],
            goods: [userSample2, authSample],
            updated: "1天前"
        }
    ];
    var homeStoriesSample = [
        {
            user: authSample,
            list: [
                {
                    user: authSample,
                    cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "動態1",
                    isNew: true
                },
                {
                    user: authSample,
                    cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "動態2",
                    isNew: false
                },
                {
                    user: authSample,
                    cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "動態3",
                    isNew: false
                },
                {
                    user: authSample,
                    cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "動態4",
                    isNew: false
                },
                {
                    user: authSample,
                    cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "動態1",
                    isNew: false
                },
            ]
        },
        {
            user: userSample3,
            list: [
                {
                    user: userSample3,
                    cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "USER 3 動態",
                    isNew: true
                },
                {
                    user: userSample3,
                    cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "USER 3 動態",
                    isNew: true
                }
            ]
        },
        {
            user: userSample5,
            list: [
                {
                    user: userSample5,
                    cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "USER 5 動態",
                    isNew: true
                },
                {
                    user: userSample5,
                    cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "USER 5 動態",
                    isNew: true
                }
            ]
        },
        {
            user: userSample1,
            list: [
                {
                    user: userSample1,
                    cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "USER 1 動態",
                    isNew: false
                },
                {
                    user: userSample1,
                    cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "USER 1 動態",
                    isNew: false
                }
            ]
        },
    ]
    var storysSample = [
        {
            user: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "動態1",
            isNew: true
        },
        {
            user: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "動態2",
            isNew: false
        },
        {
            user: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "動態3",
            isNew: false
        },
        {
            user: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "動態4",
            isNew: false
        },
        {
            user: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "動態1",
            isNew: false
        },
        {
            user: userSample1,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 1 動態",
            isNew: false
        },
        {
            user: userSample1,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 1 動態",
            isNew: false
        },
        {
            user: userSample3,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 3 動態",
            isNew: true
        },
        {
            user: userSample3,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 3 動態",
            isNew: true
        },
        {
            user: userSample5,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 5 動態",
            isNew: true
        },
        {
            user: userSample5,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 5 動態",
            isNew: true
        },
        {
            user: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "動態1",
            isNew: true
        },
        {
            user: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "動態2",
            isNew: false
        },
        {
            user: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "動態3",
            isNew: false
        },
        {
            user: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "動態4",
            isNew: false
        },
        {
            user: authSample,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "動態1",
            isNew: false
        },
        {
            user: userSample1,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 1 動態",
            isNew: false
        },
        {
            user: userSample1,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 1 動態",
            isNew: false
        },
        {
            user: userSample3,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 3 動態",
            isNew: true
        },
        {
            user: userSample3,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 3 動態",
            isNew: true
        },
        {
            user: userSample5,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 5 動態",
            isNew: true
        },
        {
            user: userSample5,
            cover: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
            title: "USER 5 動態",
            isNew: true
        }
    ];
    var usersSample = [
        authSample, userSample1, userSample2, userSample3, userSample4, userSample5
    ];
    var notifiesSample1 = [
        {
            user: userSample1,
            post: postsSample[0],
            isGood: true,
            updated: "1 個小時"
        },
        {
            user: userSample1,
            post: postsSample[0],
            isComment: true,
            comment: "留言範例留言範例留言範例留言範例留言範例",
            updated: "1 個小時"
        },
        {
            user: userSample2,
            post: postsSample[0],
            isComment: true,
            comment: "留言範例留言範例留言範例留言範例留言範例",
            updated: "1 個小時"
        },
        {
            user: userSample2,
            post: postsSample[0],
            isGood: true,
            updated: "1 個小時"
        }
    ];
    var notifiesSample2 = [
        {
            user: userSample3,
            post: postsSample[1],
            isGood: true,
            updated: "1 天前"
        },
        {
            user: userSample5,
            post: postsSample[1],
            isComment: true,
            comment: "留言範例留言範例留言範例留言範例留言範例",
            updated: "1 天前"
        }
    ];
    var notifiesSample3 = [
        {
            user: userSample3,
            post: postsSample[3],
            isGood: true,
            updated: "3 天前"
        },
        {
            user: userSample5,
            post: postsSample[3],
            isComment: true,
            comment: "留言範例留言範例留言範例留言範例留言範例",
            updated: "3 天前"
        },
        {
            user: userSample4,
            post: postsSample[3],
            isGood: true,
            updated: "3 天前"
        },
        {
            user: userSample4,
            post: postsSample[3],
            isComment: true,
            comment: "留言範例留言範例留言範例留言範例留言範例",
            updated: "3 天前"
        },
        {
            user: userSample2,
            post: postsSample[3],
            isComment: true,
            comment: "留言範例留言範例留言範例留言範例留言範例",
            updated: "3 天前"
        }
    ];
    var notifiesSample4 = [
        {
            user: userSample1,
            post: postsSample[4],
            isComment: true,
            comment: "留言範例留言範例留言範例留言範例留言範例",
            updated: "1 週前"
        },
        {
            user: userSample5,
            post: postsSample[4],
            isGood: true,
            updated: "1 週前"
        },
        {
            user: userSample3,
            post: postsSample[4],
            isComment: true,
            comment: "留言範例留言範例留言範例留言範例留言範例",
            updated: "1 週前"
        },
        {
            user: userSample2,
            post: postsSample[4],
            isGood: true,
            updated: "1 週前"
        }
    ];
    var notifiesSample5 = [
        {
            user: userSample5,
            post: postsSample[5],
            isComment: true,
            comment: "留言範例留言範例留言範例留言範例留言範例",
            updated: "1 個月前"
        },
        {
            user: userSample4,
            post: postsSample[6],
            isGood: true,
            updated: "1 個月前"
        },
        {
            user: userSample2,
            post: postsSample[7],
            isComment: true,
            comment: "留言範例留言範例留言範例留言範例留言範例",
            updated: "1 個月前"
        },
        {
            user: userSample2,
            post: postsSample[8],
            isGood: true,
            updated: "1 個月前"
        },
        {
            user: userSample3,
            post: postsSample[8],
            isGood: true,
            updated: "1 個月前"
        }
    ];
    var messagesSample = [
        {
            user: userSample1,
            list: [
                {
                    from: userSample1,
                    to: authSample,
                    isImage: false,
                    content: "訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例",
                    updated: "1天前"
                },
                {
                    from: authSample,
                    to: userSample1,
                    isImage: false,
                    content: "訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例",
                    updated: "2天前"
                },
                {
                    from: userSample1,
                    to: authSample,
                    isImage: true,
                    content: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    updated: "2天前"
                }
            ]
        },
        {
            user: userSample2,
            list: [
                {
                    from: userSample2,
                    to: authSample,
                    isImage: true,
                    content: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    updated: "2天前"
                },
                {
                    from: userSample2,
                    to: authSample,
                    isImage: false,
                    content: "訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例",
                    updated: "1天前"
                },
                {
                    from: authSample,
                    to: userSample2,
                    isImage: false,
                    content: "訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例",
                    updated: "2天前"
                }
            ]
        },
        {
            user: userSample3,
            list: [
                {
                    from: authSample,
                    to: userSample3,
                    isImage: false,
                    content: "訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例",
                    updated: "2天前"
                },
                {
                    from: userSample3,
                    to: authSample,
                    isImage: false,
                    content: "訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例訊息範例",
                    updated: "1天前"
                },
                {
                    from: userSample3,
                    to: authSample,
                    isImage: true,
                    content: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    updated: "2天前"
                }
            ]
        }
    ];
    /**
     * 
     */
    var postSctollTimer = null;
    /**
     * 
     */
    function showHomePage() {
        var homePage = location.href._url()._param_({ pg: null })
        var authPage = location.href._url()._param_({ pg: "user", uid: authSample.uid });
        /**
         * 添加歷史紀錄
         */
        homePage._history();
        /**
         * 更新畫面
         */
        document.getElementById("body")._attr({ pg: "home" }).$_()._child([
            /**
             * 左邊區塊
             */
            "div"._([
                /**
                 * 插入限時動態
                 */
                "div"._([
                    "ul"._(
                        homeStoriesSample._($1 => {
                            var list = $1.list.sort((a, b) => b.isNew - a.isNew);
                            var cover = list[0].cover;
                            var isNew = list[0].isNew;
                            return "li"._([
                                `button${isNew ? ".new" : ""}`._([
                                    "div"._([
                                        "img"._(cover)
                                    ]),
                                    "p"._($1.user.uid)
                                ])._click(() => showPopStory())
                            ])
                        })
                    ),
                    "button"._([
                        "i.fas.fa-chevron-circle-left"._()
                    ]),
                    "button"._([
                        "i.fas.fa-chevron-circle-right"._()
                    ])
                ]),
                /**
                 * 插入貼文
                 */
                "ul"._(
                    postsSample._($1 => {
                        var userPage = location.href._url()._param_({ pg: "user", uid: $1.auth.uid });
                        return "li.row"._([
                            /**
                             * 頂部
                             */
                            "div"._([
                                "div"._([
                                    "a"._([
                                        "img"._($1.auth.head)
                                    ]).go(userPage),
                                    "i.fas.fa-hashtag"._(),
                                    "div"._([
                                        // "a"._({ tag: 1, innerText: "$TAG" }),
                                        "a.bold"._($1.auth.uid).go(userPage)
                                    ])
                                ]),
                                "button"._([
                                    "i.fas.fa-ellipsis-h"._()
                                ])
                            ]),
                            /**
                             * 媒體
                             */
                            `div.r${$1.photos.length}`._([
                                /**
                                 * 圖片
                                 */
                                "ul"._(
                                    $1.photos._($2 => {
                                        return "li"._([
                                            "img"._($2)
                                        ]);
                                    })
                                )._scroll(function (e) {
                                    clearTimeout(postSctollTimer);
                                    postSctollTimer = null;
                                    postSctollTimer = setTimeout(() => {
                                        clearTimeout(systemScrollTimer);
                                        systemScrollTimer = null;
                                        var cw = this.clientWidth;
                                        var sw = this.scrollWidth;
                                        var sl = this.scrollLeft;
                                        var pg = Math.round(sl / cw);
                                        var last = Math.round(sw / cw) - 1;

                                        this.$next(0).$child('li[sel="1"]')._attr({ sel: 0 });
                                        this.$next(0).$child(pg)._attr({ sel: 1 });

                                        this.$next(1).style['display'] = (pg > 0) ? "block" : "none";
                                        this.$next(2).style['display'] = (pg === last) ? "none" : "block";

                                        systemScrollTimer = this.scrollTo({ left: pg * cw });

                                    }, 100);
                                }),
                                /**
                                 * 指示
                                 */
                                ($1.photos.length === 1) ? null : "ul"._(
                                    $1.photos.length.array()._($2 => {
                                        return "li"._({ sel: ($2 === 0) ? 1 : 0 });
                                    })
                                ),
                                /**
                                 * 左側按鈕
                                 */
                                ($1.photos.length === 1) ? null : "button"._([
                                    "i.fas.fa-chevron-circle-left"._()
                                ])._click(function (e) {
                                    clearTimeout(systemScrollTimer);
                                    systemScrollTimer = null;
                                    var dom = this.$previous(1);
                                    var cw = dom.clientWidth;
                                    var sl = dom.scrollLeft;
                                    systemScrollTimer = dom.scrollTo({ left: Math.round((sl - cw) / cw) * cw });
                                }),
                                /**
                                 * 右側按鈕
                                 */
                                ($1.photos.length === 1) ? null : "button"._([
                                    "i.fas.fa-chevron-circle-right"._()
                                ])._click(function (e) {
                                    clearTimeout(systemScrollTimer);
                                    systemScrollTimer = null;
                                    var dom = this.$previous(2);
                                    var cw = dom.clientWidth;
                                    var sl = dom.scrollLeft;
                                    systemScrollTimer = dom.scrollTo({ left: Math.round((sl + cw) / cw) * cw });
                                })
                            ]),
                            /**
                             * 內文
                             */
                            "div"._([
                                "ul"._([
                                    "li"._([
                                        "i.far.fa-heart"._()
                                    ]),
                                    "li"._([
                                        "i.far.fa-comment"._()
                                    ]),
                                    "li"._([
                                        "i.far.fa-paper-plane"._()
                                    ])
                                ]),
                                "button"._([
                                    "i.far.fa-bookmark"._()
                                ]),
                                "strong"._(`${$1.goods.length} 個讚`),
                                "p"._([
                                    "a"._($1.auth.name).go(userPage),
                                    $1.description
                                ]),
                                "button"._('查看1 則留言'),
                                "p"._('1 天前'),
                                "div"._([
                                    "button"._([
                                        "i.far.fa-smile"._()
                                    ]),
                                    "input"._('text 留言⋯⋯'),
                                    "button"._('發布')
                                ])
                            ])
                        ])
                    })
                )
            ]),
            /**
             * 右邊區塊
             */
            "div"._([
                "div"._([
                    "a"._([
                        "img"._(authSample.head)
                    ]).go(authPage),
                    "a"._([
                        "p"._(authSample.uid),
                        "p"._(authSample.name)
                    ]).go(authPage),
                    "button"._('切換')
                ]),
                "div"._([
                    "p"._('推薦用戶'),
                    "button"._('查看全部'),
                    "ul"._(
                        [userSample1, userSample2, userSample3, userSample4, userSample5]._(($1, i) => {
                            var hintsSample = [
                                "hauhau.chen 的追蹤對象",
                                "damin_wang 的追蹤對象",
                                "rich_wu + 和其他2人的追蹤對象",
                                "heart.chang 的追蹤對象",
                                "loyaltylin 的追蹤對象"
                            ]
                            var userPage = location.href._url()._param_({ pg: "user", uid: $1.uid });
                            return "li"._([
                                "a"._([
                                    "img"._($1.head),
                                ]).go(userPage),
                                "a"._([
                                    "p"._($1.uid),
                                    "p"._(hintsSample[i])
                                ]).go(userPage),
                                "button"._('追蹤')
                            ])
                        })
                    )
                ]),
                "ul"._([
                    "li"._('關於'),
                    "li"._('使用說明'),
                    "li"._('隱私'),
                    "li"._('使用條款'),
                    "li"._('地點'),
                    "li"._('語言')
                ]),
                "p"._('© 2022 Pardn Ltd')
            ])
        ])
    };
    function showSearch() {
        if (!document.getElementById("body")) return alert('showSearch: ERR');
        if ("pop".$()) "pop".$().$rm();
        /**
         * 添加歷史紀錄
         */
        location.href._url()._param_({ pg: "search" })._history();

        var is2n = 0;
        var storys = postsSample;
        var domStorys = [];
        function setStorys() {
            var ary = [];
            if (storys.length >= 5) {
                ary = storys.slice(0, 5);
                storys = storys.slice(5, storys.length);
                is2n = Math.abs(is2n - 1);
                if (is2n) {
                    domStorys.push(
                        "li"._([
                            "button"._([
                                "img"._(ary[0].cover),
                                "div"._([
                                    "ul"._([
                                        "li"._([
                                            "i.fas.fa-heart"._(),
                                            "p"._(`${ary[0].goods.length}`)
                                        ]),
                                        "li"._([
                                            "i.fas.fa-comment"._(),
                                            "p"._(`${ary[0].comments.length}`)
                                        ])
                                    ])
                                ])
                            ])._click(() => showPopPost(ary[0]))
                        ])
                    );
                    domStorys.push(
                        "li"._([
                            "button"._([
                                "img"._(ary[1].cover),
                                "div"._([
                                    "ul"._([
                                        "li"._([
                                            "i.fas.fa-heart"._(),
                                            "p"._(`${ary[1].goods.length}`)
                                        ]),
                                        "li"._([
                                            "i.fas.fa-comment"._(),
                                            "p"._(`${ary[1].comments.length}`)
                                        ])
                                    ])
                                ])
                            ])._click(() => showPopPost(ary[1])),
                            "button"._([
                                "img"._(ary[2].cover),
                                "div"._([
                                    "ul"._([
                                        "li"._([
                                            "i.fas.fa-heart"._(),
                                            "p"._(`${ary[2].goods.length}`)
                                        ]),
                                        "li"._([
                                            "i.fas.fa-comment"._(),
                                            "p"._(`${ary[2].comments.length}`)
                                        ])
                                    ])
                                ])
                            ])._click(() => showPopPost(ary[2]))
                        ])
                    );
                    domStorys.push(
                        "li"._([
                            "button"._([
                                "img"._(ary[3].cover),
                                "div"._([
                                    "ul"._([
                                        "li"._([
                                            "i.fas.fa-heart"._(),
                                            "p"._(`${ary[3].goods.length}`)
                                        ]),
                                        "li"._([
                                            "i.fas.fa-comment"._(),
                                            "p"._(`${ary[3].comments.length}`)
                                        ])
                                    ])
                                ])
                            ])._click(() => showPopPost(ary[3])),
                            "button"._([
                                "img"._(ary[4].cover),
                                "div"._([
                                    "ul"._([
                                        "li"._([
                                            "i.fas.fa-heart"._(),
                                            "p"._(`${ary[4].goods.length}`)
                                        ]),
                                        "li"._([
                                            "i.fas.fa-comment"._(),
                                            "p"._(`${ary[4].comments.length}`)
                                        ])
                                    ])
                                ])
                            ])._click(() => showPopPost(ary[4]))
                        ])
                    );
                }
                else {
                    domStorys.push(
                        "li"._([
                            "button"._([
                                "img"._(ary[0].cover),
                                "div"._([
                                    "ul"._([
                                        "li"._([
                                            "i.fas.fa-heart"._(),
                                            "p"._(`${ary[0].goods.length}`)
                                        ]),
                                        "li"._([
                                            "i.fas.fa-comment"._(),
                                            "p"._(`${ary[0].comments.length}`)
                                        ])
                                    ])
                                ])
                            ])._click(() => showPopPost(ary[0])),
                            "button"._([
                                "img"._(ary[1].cover),
                                "div"._([
                                    "ul"._([
                                        "li"._([
                                            "i.fas.fa-heart"._(),
                                            "p"._(`${ary[1].goods.length}`)
                                        ]),
                                        "li"._([
                                            "i.fas.fa-comment"._(),
                                            "p"._(`${ary[1].comments.length}`)
                                        ])
                                    ])
                                ])
                            ])._click(() => showPopPost(ary[1]))
                        ])
                    );
                    domStorys.push(
                        "li"._([
                            "button"._([
                                "img"._(ary[2].cover),
                                "div"._([
                                    "ul"._([
                                        "li"._([
                                            "i.fas.fa-heart"._(),
                                            "p"._(`${ary[2].goods.length}`)
                                        ]),
                                        "li"._([
                                            "i.fas.fa-comment"._(),
                                            "p"._(`${ary[2].comments.length}`)
                                        ])
                                    ])
                                ])
                            ])._click(() => showPopPost(ary[2])),
                            "button"._([
                                "img"._(ary[3].cover),
                                "div"._([
                                    "ul"._([
                                        "li"._([
                                            "i.fas.fa-heart"._(),
                                            "p"._(`${ary[3].goods.length}`)
                                        ]),
                                        "li"._([
                                            "i.fas.fa-comment"._(),
                                            "p"._(`${ary[3].comments.length}`)
                                        ])
                                    ])
                                ])
                            ])._click(() => showPopPost(ary[4]))
                        ])
                    );
                    domStorys.push(
                        "li"._([
                            "button"._([
                                "img"._(ary[4].cover),
                                "div"._([
                                    "ul"._([
                                        "li"._([
                                            "i.fas.fa-heart"._(),
                                            "p"._(`${ary[4].goods.length}`)
                                        ]),
                                        "li"._([
                                            "i.fas.fa-comment"._(),
                                            "p"._(`${ary[4].comments.length}`)
                                        ])
                                    ])
                                ])
                            ])._click(() => showPopPost(ary[4]))
                        ])
                    );
                }
                setStorys()
            }
        };
        setStorys();
        /**
         * 更新畫面
         */
        document.getElementById("body")._attr({ pg: "search" }).$_()._child([
            "div"._([
                "i.fas.fa-search"._(),
                "input"._('text 搜尋')
            ]),
            "ul"._(domStorys)
        ])
    };
    function showMessage() {
        if (!document.getElementById("body")) return alert('showMessage: ERR');
        if ("pop".$()) "pop".$().$rm();

        var defaultUser = messagesSample[0];
        var defaultUserPage = location.href._url()._param_({ pg: "user", uid: defaultUser.user.uid });
        var authPage = location.href._url()._param_({ pg: "user", uid: authSample.uid });
        /**
         * 添加歷史紀錄
         */
        location.href._url()._param_({ pg: "message" })._history();
        /**
         * 更新畫面
         */
        document.getElementById("body")._attr({ pg: "message" }).$_()._child([
            "div"._([
                "nav"._([
                    "div"._([
                        "button"._([
                            "b"._('pardnchiu'),
                            "i.fas.fa-chevron-right"._()
                        ]),
                        "button"._([
                            "i.far.fa-edit"._()
                        ])
                    ]),
                    "div#message-nav"._([
                        "div"._([
                            "a"._([
                                "img"._(defaultUser.user.head)
                            ]).go(defaultUserPage),
                            "a"._(defaultUser.user.name).go(defaultUserPage)
                        ]),
                        "button"._([
                            "i.fas.fa-exclamation-circle"._()
                        ])
                    ])
                ]),
                "div"._([
                    /**
                     * 左側
                     */
                    "div"._([
                        "p"._('訊息'),
                        "button"._('1則陌生訊息'),
                        "ul#message-list"._(
                            messagesSample._(($1, i) => {
                                return "li"._([
                                    `button${i === 0 ? ".sel" : ""}`._([
                                        "img"._($1.user.head),
                                        "p"._([
                                            "a"._($1.user.name),
                                            "br"._(),
                                            $1.list.$last().content
                                        ])
                                    ])._click(function (e) {
                                        var userPage = location.href._url()._param_({ pg: "user", uid: $1.user.uid });
                                        "message-list".$child('button.sel').class_('sel');
                                        this._class('sel');
                                        "message-nav".$child([0, 0, 0]).src = $1.user.head;
                                        "message-nav".$child([0, 0]).href = userPage;
                                        "message-nav".$child([0, 1]).innerText = $1.user.name;
                                        "message-nav".$child([0, 1]).href = userPage;
                                        "message-body".$_()._child(
                                            $1.list._($1 => {
                                                var isFrom = $1.from.uid === authSample.uid;
                                                return `li${isFrom ? ".from" : ""}`._([
                                                    "a"._([
                                                        "img"._(isFrom ? authSample.head : $1.from.head)
                                                    ]).go(isFrom ? authPage : userPage),
                                                    "div"._([
                                                        $1.isImage ?
                                                            "img"._($1.content) :
                                                            "p"._($1.content)
                                                    ])
                                                ])
                                            })
                                        )
                                    })
                                ])
                            })
                        )
                    ]),
                    /**
                     * 右側
                     */
                    "div"._([
                        /**
                         * 聊天內容
                         */
                        "ul#message-body"._(
                            defaultUser.list._($1 => {
                                var isFrom = $1.from.uid === authSample.uid;
                                return `li${isFrom ? ".from" : ""}`._([
                                    "a"._([
                                        "img"._(isFrom ? authSample.head : $1.from.head)
                                    ]).go(isFrom ? authPage : defaultUserPage),
                                    "div"._([
                                        $1.isImage ?
                                            "img"._($1.content) :
                                            "p"._($1.content)
                                    ])
                                ])
                            })
                        ),
                        "div"._([
                            /**
                             * 自適應輸入框
                             */
                            "div"._([
                                'textarea'._('訊息⋯⋯')._focus(function (e) {
                                    this.$next(1).style["display"] = "block";
                                    this.$next(2).style["display"] = "none";
                                    this.$next(3).style["display"] = "none";
                                })._blur(function (e) {
                                    this.$next(1).style["display"] = "none";
                                    this.$next(2).style["display"] = "block";
                                    this.$next(3).style["display"] = "block";
                                })._input(function (e) {
                                    this.style["height"] = 0;
                                    this.style["height"] = `${this.scrollHeight}px`;
                                    this.$parent(1).$previous(0).style["bottom"] = `${this.$parent(1).clientHeight}px`;
                                    this.$parent(1).$previous(0).scrollTop = this.$parent(1).$previous(0).scrollHeight;
                                }),
                                "button"._([
                                    "i.far.fa-smile"._()
                                ]),
                                "button"._('傳送'),
                                "button"._([
                                    "i.far.fa-image"._()
                                ]),
                                "button"._([
                                    "i.far.fa-heart"._()
                                ])
                            ])
                        ])
                    ])
                ])
            ])
        ])
    };
    function showNotify() {
        "nav-notify".$_()._child([
            "h6"._('通知'),
            "div"._([
                "p"._('今天'),
                "ul"._(
                    notifiesSample1._($1 => {
                        var postPage = location.href._url()._param_({ pg: "post", pid: postsSample.indexOf($1.post) });
                        return "li"._([
                            "a"._([
                                "img"._($1.user.head),
                                "p"._([
                                    "strong"._($1.user.uid),
                                    `${$1.isGood ? "說你的相片讚。" : "留言回應了："}`,
                                    $1.isComment ? `${$1.comment.slice(0, 7)}${$1.comment.length > 7 ? "..." : ""}・` : "",
                                    "i"._($1.updated)
                                ]),
                                "img"._($1.post.cover)
                            ]).go(postPage)
                        ])
                    })
                )
            ]),
            "div"._([
                "p"._('昨天'),
                "ul"._(
                    notifiesSample2._($1 => {
                        var postPage = location.href._url()._param_({ pg: "post", pid: postsSample.indexOf($1.post) });
                        return "li"._([
                            "a"._([
                                "img"._($1.user.head),
                                "p"._([
                                    "strong"._($1.user.uid),
                                    `${$1.isGood ? "說你的相片讚。" : "留言回應了："}`,
                                    $1.isComment ? `${$1.comment.slice(0, 7)}${$1.comment.length > 7 ? "..." : ""}・` : "",
                                    "i"._($1.updated)
                                ]),
                                "img"._($1.post.cover)
                            ]).go(postPage)
                        ])
                    })
                )
            ]),
            "div"._([
                "p"._('本週'),
                "ul"._(
                    notifiesSample3._($1 => {
                        var postPage = location.href._url()._param_({ pg: "post", pid: postsSample.indexOf($1.post) });
                        return "li"._([
                            "a"._([
                                "img"._($1.user.head),
                                "p"._([
                                    "strong"._($1.user.uid),
                                    `${$1.isGood ? "說你的相片讚。" : "留言回應了："}`,
                                    $1.isComment ? `${$1.comment.slice(0, 7)}${$1.comment.length > 7 ? "..." : ""}・` : "",
                                    "i"._($1.updated)
                                ]),
                                "img"._($1.post.cover)
                            ]).go(postPage)
                        ])
                    })
                )
            ]),
            "div"._([
                "p"._('本月'),
                "ul"._(
                    notifiesSample4._($1 => {
                        var postPage = location.href._url()._param_({ pg: "post", pid: postsSample.indexOf($1.post) });
                        return "li"._([
                            "a"._([
                                "img"._($1.user.head),
                                "p"._([
                                    "strong"._($1.user.uid),
                                    `${$1.isGood ? "說你的相片讚。" : "留言回應了："}`,
                                    $1.isComment ? `${$1.comment.slice(0, 7)}${$1.comment.length > 7 ? "..." : ""}・` : "",
                                    "i"._($1.updated)
                                ]),
                                "img"._($1.post.cover)
                            ]).go(postPage)
                        ])
                    })
                )
            ]),
            "div"._([
                "p"._('更早之前'),
                "ul"._(
                    notifiesSample5._($1 => {
                        var postPage = location.href._url()._param_({ pg: "post", pid: postsSample.indexOf($1.post) });
                        return "li"._([
                            "a"._([
                                "img"._($1.user.head),
                                "p"._([
                                    "strong"._($1.user.uid),
                                    `${$1.isGood ? "說你的相片讚。" : "留言回應了："}`,
                                    $1.isComment ? `${$1.comment.slice(0, 7)}${$1.comment.length > 7 ? "..." : ""}・` : "",
                                    "i"._($1.updated)
                                ]),
                                "img"._($1.post.cover)
                            ]).go(postPage)
                        ])
                    })
                )
            ])
        ]);
    };
    function showUser(user) {
        if (!document.getElementById("body")) return alert('shoUser: ERR');
        if ("pop".$()) "pop".$().$rm();
        /**
         * 添加歷史紀錄
         */
        location.href._url()._param_({ pg: "user", uid: user.uid })._history();
        /**
         * 更新畫面
         */
        document.getElementById("body")._attr({ pg: "user" }).$_()._child([
            "div"._([
                "div".new([
                    "img.head"._(user.head),
                ]),
                "div"._([
                    "h2"._(user.uid),
                    `i.${user.uid === authSample.uid ? "fas.fa-cog" : "fas.fa-ellipsis-h"}`._(),
                    "button"._({ auth: user.uid === authSample.uid ? 1 : 0, innerText: user.uid === authSample.uid ? "編輯個人檔案" : "追蹤對方" }),
                    `i.${user.uid === authSample.uid ? "fas.fa-cog" : "fas.fa-ellipsis-h"}`._(),
                    "ul"._([
                        "li"._(`<b>${postsSample.filter($1 => $1.auth.uid === user.uid).length}</b>則貼文`),
                        "li"._(`<b>${user.follower.length}</b>位粉絲`),
                        "li"._(`<b>${user.following.length}</b>位追蹤中`)
                    ]),
                    "p"._(user.name),
                    "p"._(user.cv),
                    "a"._(user.link.replace(/^https?\:\/\//, '')).go(user.link, '_blank')
                ]),
                "ul"._({ hide: (user.uid !== authSample.uid && !user.storys.length) ? 1 : 0 },
                    (function () {
                        var ary = [];
                        user.storys.forEach($1 => {
                            ary.push(
                                "li"._([
                                    "button"._({ new: $1.isNew ? 1 : 0 }, [
                                        "div"._([
                                            "img"._($1.cover)
                                        ]),
                                        "p"._($1.title)
                                    ])._click(() => showPopStory())
                                ])
                            )
                        })
                        if (user.uid === authSample.uid) ary.push(
                            "li"._([
                                "button"._([
                                    "i.fas.fa-plus"._(),
                                    "p"._('新焦點動態')
                                ])
                            ])
                        );
                        return ary;
                    }())
                ),
                "ul"._([
                    "li"._(`<b>${postsSample.filter($1 => $1.auth.uid === user.uid).length}</b>則貼文`),
                    "li"._(`<b>${user.follower.length}</b>位粉絲`),
                    "li"._(`<b>${user.following.length}</b>位追蹤中`)
                ]),
            ]),
            "div#user-tab"._([
                "ul"._([
                    "li"._({ sel: 1 }, [
                        "i.fas.fa-th"._(),
                        "p"._('貼文')
                    ])._click(onclickUserTab),
                    "li"._([
                        "i.far.fa-bookmark"._(),
                        "p"._('我的珍藏')
                    ])._click(onclickUserTab),
                    "li"._([
                        "i.fas.fa-user-circle"._(),
                        "p"._('已標注')
                    ])._click(onclickUserTab)
                ])
            ]),
            "div"._(
                postsSample.filter($1 => $1.auth.uid === user.uid)._($1 => {
                    return "div"._({ r: $1.photos.length }, [
                        "img"._($1.cover),
                        "i.fas.fa-clone"._(),
                        "div"._([
                            "ul"._([
                                "li"._([
                                    "i.fas.fa-heart"._(),
                                    "p"._($1.total.good.toStr())
                                ]),
                                "li"._([
                                    "i.fas.fa-comment"._(),
                                    "p"._($1.total.comment.toStr())
                                ])
                            ])
                        ])
                    ])._click(() => showPopPost($1))
                })
            )
        ]);
        function onclickUserTab(e) {
            "user-tab".$child('li[sel="1"]')._attr({ sel: 0 });
            this._attr({ sel: 1 });
        };
    };
    function showPost(pid) {
        if (!document.getElementById("body")) return alert('shoUser: ERR');
        if ("pop".$()) "pop".$().$rm();
        var post = postsSample[pid];
        var authPage = location.href._url()._param_({ pg: "user", uid: post.auth.uid });
        var pg = 0;
        /**
         * 添加歷史紀錄
         */
        location.href._url()._param_({ pg: "post", pid: pid })._history();
        /**
         * 更新畫面
         */
        document.getElementById("body")._attr({ pg: "post" }).$_()._child([
            "div"._([
                "div"._([
                    /**
                     * 左側
                     */
                    "div"._([
                        "img"._(post.photos[0]),
                        /**
                         * 左側按鈕
                         */
                        (post.photos.length === 1) ? null : "button"._([
                            "i.fas.fa-chevron-circle-left"._()
                        ])._click(function (e) {
                            if (pg - 1 < 0) return;
                            pg -= 1;
                            this.$next(0).style['display'] = "block";
                            this.style['display'] = (pg === 0) ? "none" : "block";
                            this.$parent(0).$child(0).src = post.photos[pg];
                        }),
                        /**
                         * 右側按鈕
                         */
                        (post.photos.length === 1) ? null : "button"._([
                            "i.fas.fa-chevron-circle-right"._()
                        ])._click(function (e) {
                            if (pg + 1 >= post.photos.length) return;
                            pg += 1;
                            this.$previous(0).style['display'] = "block";
                            this.style['display'] = (pg + 1 === post.photos.length) ? "none" : "block";
                            this.$parent(0).$child(0).src = post.photos[pg];
                        })
                    ]),
                    /**
                     * 右側
                     */
                    "div"._([
                        /**
                         * 張貼者
                         */
                        "div"._([
                            "a"._([
                                "img"._(post.auth.head)
                            ]).go(authPage),
                            "a"._(post.auth.name).go(authPage),
                            "i.fas.fa-ellipsis-h"._()
                        ]),
                        /**
                         * 內容、留言
                         */
                        "ul"._(
                            (function () {
                                var ary = [
                                    "li"._([
                                        "a"._([
                                            "img"._(post.auth.head)
                                        ]).go(authPage),
                                        "div"._([
                                            "p"._([
                                                "a"._(post.auth.name).go(authPage),
                                                post.description
                                            ]),
                                            "p"._(post.updated)
                                        ])
                                    ])
                                ];
                                if (post.comments) post.comments.forEach($1 => {
                                    var userPage = location.href._url()._param_({ pg: "user", uid: $1.user.uid });
                                    ary.push(
                                        "li"._([
                                            "a"._([
                                                "img"._($1.user.head)
                                            ]).go(userPage),
                                            "div"._([
                                                "p"._([
                                                    "a"._($1.user.name).go(userPage),
                                                    $1.description
                                                ]),
                                                "p"._($1.updated)
                                            ])
                                        ])
                                    )
                                })
                                return ary;
                            }())
                        ),
                        /**
                         * 按鈕
                         */
                        "div"._([
                            "ul"._([
                                "li"._([
                                    "button"._([
                                        "i.far.fa-heart"._()
                                    ])
                                ]),
                                "li"._([
                                    "button"._([
                                        "i.far.fa-comment"._()
                                    ])
                                ]),
                                "li"._([
                                    "button"._([
                                        "i.far.fa-paper-plane"._()
                                    ])
                                ])
                            ]),
                            "button"._([
                                "i.far.fa-bookmark"._()
                            ]),
                            "div"._(
                                (function () {
                                    var ary = [];
                                    if (post.goods && post.goods.length) {
                                        post.goods.forEach(($1, i) => {
                                            var userPage = location.href._url()._param_({ pg: "user", uid: $1.uid });
                                            if (i < 3) ary.push(
                                                "a"._([
                                                    "img"._($1.head)
                                                ]).go(userPage)
                                            );
                                        });
                                        var user0Page = location.href._url()._param_({ pg: "user", uid: post.goods[0].uid });
                                        ary.push(
                                            "p"._([
                                                "a"._(post.goods[0].uid).go(user0Page),
                                                post.goods.length > 1 ? `和其他${post.goods.length - 1}個人都` : "",
                                                "說讚"
                                            ])
                                        );
                                    }
                                    else ary.push(
                                        "p"._('成為第一個按讚的人吧')
                                    );
                                    return ary;
                                }())
                            ),
                            "p"._(post.updated)
                        ]),
                        "div"._([
                            "i.far.fa-smile"._(),
                            "input"._('text 留言⋯⋯'),
                            "button"._('發布')
                        ])
                    ])
                ])
            ]),
            "p"._([
                "更多「",
                "a"._(post.auth.uid).go(authPage),
                "」的貼文"
            ]),
            "div"._(
                postsSample.filter($1 => $1.auth.uid === post.auth.uid && postsSample.indexOf($1) !== pid).slice(0, 6)._($1 => {
                    return "div"._({ r: $1.photos.length }, [
                        "img"._($1.cover),
                        "i.fas.fa-clone"._(),
                        "div"._([
                            "ul"._([
                                "li"._([
                                    "i.fas.fa-heart"._(),
                                    "p"._($1.total.good.toStr())
                                ]),
                                "li"._([
                                    "i.fas.fa-comment"._(),
                                    "p"._($1.total.comment.toStr())
                                ])
                            ])
                        ])
                    ])._click(() => showPopPost($1))
                })
            )
        ]);
    };
    function showPopPost(post) {
        /**
         * 添加歷史紀錄
         */
        location.href._url()._param_({ pg: "post", pid: postsSample.indexOf(post) })._history();

        var authPage = location.href._url()._param_({ pg: "user", uid: post.auth.uid });
        var pg = 0;
        var dom =
            "div#pop"._([
                /**
                 * 關閉
                 */
                "button"._([
                    "i.fas.fa-times"._()
                ])._click(() => dom.$rm()),
                "div"._([
                    /**
                     * 左側
                     */
                    "div"._([
                        "img"._(post.photos[0]),
                        /**
                         * 左側按鈕
                         */
                        (post.photos.length === 1) ? null : "button"._([
                            "i.fas.fa-chevron-circle-left"._()
                        ])._click(function (e) {
                            if (pg - 1 < 0) return;
                            pg -= 1;
                            this.$next(0).style['display'] = "block";
                            this.style['display'] = (pg === 0) ? "none" : "block";
                            this.$parent(0).$child(0).src = post.photos[pg];
                        }),
                        /**
                         * 右側按鈕
                         */
                        (post.photos.length === 1) ? null : "button"._([
                            "i.fas.fa-chevron-circle-right"._()
                        ])._click(function (e) {
                            if (pg + 1 >= post.photos.length) return;
                            pg += 1;
                            this.$previous(0).style['display'] = "block";
                            this.style['display'] = (pg + 1 === post.photos.length) ? "none" : "block";
                            this.$parent(0).$child(0).src = post.photos[pg];
                        })
                    ]),
                    /**
                     * 右側
                     */
                    "div"._([
                        /**
                         * 張貼者
                         */
                        "div"._([
                            "a"._([
                                "img"._(post.auth.head)
                            ]).go(authPage),
                            "a"._(post.auth.name).go(authPage),
                            "i.fas.fa-ellipsis-h"._()
                        ]),
                        /**
                         * 內容、留言
                         */
                        "ul"._(
                            (function () {
                                var ary = [
                                    "li"._([
                                        "a"._([
                                            "img"._(post.auth.head)
                                        ]).go(authPage),
                                        "div"._([
                                            "p"._([
                                                "a"._(post.auth.name).go(authPage),
                                                post.description
                                            ]),
                                            "p"._(post.updated)
                                        ])
                                    ])
                                ];
                                if (post.comments) post.comments.forEach($1 => {
                                    var userPage = location.href._url()._param_({ pg: "user", uid: $1.user.uid });
                                    ary.push(
                                        "li"._([
                                            "a"._([
                                                "img"._($1.user.head)
                                            ]).go(userPage),
                                            "div"._([
                                                "p"._([
                                                    "a"._($1.user.name).go(userPage),
                                                    $1.description
                                                ]),
                                                "p"._($1.updated)
                                            ])
                                        ])
                                    )
                                })
                                return ary;
                            }())
                        ),
                        /**
                         * 按鈕
                         */
                        "div"._([
                            "ul"._([
                                "li"._([
                                    "button"._([
                                        "i.far.fa-heart"._()
                                    ])
                                ]),
                                "li"._([
                                    "button"._([
                                        "i.far.fa-comment"._()
                                    ])
                                ]),
                                "li"._([
                                    "button"._([
                                        "i.far.fa-paper-plane"._()
                                    ])
                                ])
                            ]),
                            "button"._([
                                "i.far.fa-bookmark"._()
                            ]),
                            "div"._(
                                (function () {
                                    var ary = [];
                                    if (post.goods && post.goods.length) {
                                        post.goods.forEach(($1, i) => {
                                            var userPage = location.href._url()._param_({ pg: "user", uid: $1.uid });
                                            if (i < 3) ary.push(
                                                "a"._([
                                                    "img"._($1.head)
                                                ]).go(userPage)
                                            );
                                        });
                                        var user0Page = location.href._url()._param_({ pg: "user", uid: post.goods[0].uid });
                                        ary.push(
                                            "p"._([
                                                "a"._(post.goods[0].uid).go(user0Page),
                                                post.goods.length > 1 ? `和其他${post.goods.length - 1}個人都` : "",
                                                "說讚"
                                            ])
                                        );
                                    }
                                    else ary.push(
                                        "p"._('成為第一個按讚的人吧')
                                    );
                                    return ary;
                                }())
                            ),
                            "p"._(post.updated)
                        ]),
                        "div"._([
                            "i.far.fa-smile"._(),
                            "input"._('text 留言⋯⋯'),
                            "button"._('發布')
                        ])
                    ])
                ])
            ]);
        document.body._child([dom])
    };
    function showPopStory() {
        /**
         * 添加歷史紀錄
         */
        // location.href._url()._param_({ pg: "post", pid: postsSample.indexOf(post) })._history();

        var newsPage = location.href.defaultURL();
        // var authPage = location.href._url()._param_({ pg: "user", uid: post.auth.uid });
        var pg = 0;
        var dom =
            "div#pop-story"._([
                "a"._([
                    "img"._('image/logo_fff.svg')
                ]).go(newsPage),
                /**
                 * 關閉
                 */
                "button"._([
                    "i.fas.fa-times"._()
                ])._click(() => dom.$rm()),
                "ul"._(
                    storysSample.filter($1 => $1.user.uid !== "pardnchiu")._(($1, i) => {
                        return `li${i === 0 ? ".sel" : ""}`._([
                            "button"._([
                                "i.fas.fa-chevron-circle-left"._()
                            ])._click(function (e) {
                                var vh = document.body.clientHeight;
                                this.$parent(0).$previous(0)._class(["sel", "ani"]);
                                var timer1 = setTimeout(() => {
                                    clearTimeout(timer1);
                                    timer1 = null;
                                    this.$parent(0)._class('unsel');
                                    var timer2 = setTimeout(() => {
                                        clearTimeout(timer2);
                                        timer2 = null;
                                        this.$parent(0)._class_('');
                                    }, 500);
                                    this.$parent(1).scrollTo({ left: this.$parent(1).scrollLeft - (48 + (vh - 80 * 2) / 16 * 9 / 3) });
                                }, 5);
                            }),
                            "div"._([
                                "img"._($1.cover),
                                "button"._([
                                    "img"._($1.user.head),
                                    "p"._($1.user.name),
                                    "p"._('1天前')
                                ]),
                                "ul.r5"._([
                                    "li.sel"._(),
                                    "li"._(),
                                    "li"._(),
                                    "li"._(),
                                    "li"._()
                                ]),
                                "nav"._([
                                    "a"._([
                                        "img"._($1.user.head)
                                    ]),
                                    "p"._([
                                        "a"._($1.user.name),
                                        "1天"
                                    ])
                                ]),
                                "footer"._([
                                    "input"._(`text 回覆${$1.user.uid}⋯⋯`),
                                    "button"._([
                                        "i.far.fa-heart"._()
                                    ]),
                                    "button"._([
                                        "i.far.fa-paper-plane"._()
                                    ])
                                ])
                            ]),
                            "button"._([
                                "i.fas.fa-chevron-circle-right"._()
                            ])._click(function (e) {
                                var vh = document.body.clientHeight;
                                this.$parent(0)._class('unsel');
                                var timer = setTimeout(() => {
                                    clearTimeout(timer);
                                    timer = null;
                                    this.$parent(0)._class_('');
                                }, 500);
                                this.$parent(0).$next(0)._class(["sel", "ani"]);
                                this.$parent(1).scrollTo({ left: this.$parent(1).scrollLeft + (48 + (vh - 80 * 2) / 16 * 9 / 3) });
                            })
                        ])
                    })
                )
            ]);
        document.body._child([dom])
    };
    function initNav() {
        var pg = location.href._url().$param('pg');
        var isNew = !pg || pg.isEmpty();
        var isMessage = pg === "message";
        var newsPage = location.href._url()._param_({});
        var searchPage = location.href._url()._param_({ pg: "search" });
        var messagePage = location.href._url()._param_({ pg: "message" });
        var authPage = location.href._url()._param_({ pg: "user", uid: authSample.uid });
        document.body._child([
            "nav"._({ sel: 0 }, [
                "a"._([
                    "img"._('image/logo.svg'),
                    "i.fab.fa-instagram"._()
                ]).go(newsPage),
                "ul"._([
                    "li"._([
                        "a"._([
                            `i.${isNew ? "fas" : "far"}.fa-flag`._(),
                            "p"._('首頁')
                        ]).go(newsPage)
                    ]),
                    "li"._([
                        "a"._([
                            "i.fas.fa-search"._(),
                            "p"._('探索')
                        ]).go(searchPage)
                    ]),
                    "li"._([
                        "a"._([
                            `i.${isMessage ? "fas" : "far"}.fa-comment-dots`._(),
                            "p"._('訊息')
                        ]).go(messagePage)
                    ]),
                    "li"._([
                        "button"._([
                            "i.far.fa-heart"._(),
                            "p"._('通知')
                        ])._click(function () {
                            var isOn = Number(this.$attr('on'));
                            this._attr({ on: isOn ? 0 : 1 });
                            this.$child(0)._class_(`${isOn ? "far" : "fas"} fa-heart`);
                            this.$parent(2)._class_(isOn ? "" : "notify");
                            if (!isOn) showNotify();
                        })
                    ]),
                    "li"._([
                        "button"._([
                            "i.far.fa-plus-square"._(),
                            "p"._('建立')
                        ])._click(function () {
                            var isNotify = Number(this.$parent(0).$previous(0).$child(0).$attr('on'));
                            if (isNotify) this.$parent(0).$previous(0).$child(0).click();


                            var isOn = Number(this.$attr('on'));
                            this._attr({ on: isOn ? 0 : 1 });
                            this.$child(0)._class_(`${isOn ? "far" : "fas"} fa-plus-square`);

                        })
                    ]),
                    "li"._([
                        "a"._([
                            "img"._(authSample.head),
                            "p"._('個人檔案')
                        ]).go(authPage)
                    ])
                ]),
                "div#nav-notify"._(),
                "button"._([
                    "i.fas.fa-bars"._(),
                    "p"._('更多')
                ])
            ]),
            "section#body"._(),
            "div#nav".new([
                "a"._([
                    "img"._('image/logo.svg')
                ]).go(newsPage),
                "button"._([
                    "i.far.fa-heart"._()
                ])
            ])
        ]);
    };
    /**
     * 
     */
    (function init() {
        initNav();
        var pg = location.href._url().$param('pg');
        if (!pg) showHomePage();
        else if (pg === "user") {
            var uid = location.href._url().$param('uid');
            if (uid && usersSample.filter($1 => $1.uid === uid)) {
                showUser(usersSample.filter($1 => $1.uid === uid)[0])
            } else {
                showUser(authSample);
            };
        }
        else if (pg === "search") showSearch();
        else if (pg === "message") showMessage();
        else if (pg === "post") {
            var pid = Number(location.href._url().$param('pid'));
            showPost(pid)
        }
    }());
}());