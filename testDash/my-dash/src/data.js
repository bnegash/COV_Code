export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Dashboard",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg",
            },
        ],
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Manage Staff",
                url: "/users",
                icon: "user.svg",
            },
            {
                id: 2,
                title: "Manage Locations",
                url: "/products",
                icon: "product.svg",
            },
        ],
    },
    {
        id: 3,
        title: "General",
        listItems: [
            {
                id: 1,
                title: "Company Settings",
                url: "/",
                icon: "setting.svg",
            },
            {
                id: 2,
                title: "My Account",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 3,
                title: "Sign Out",
                url: "/",
                icon: "log.svg",
            },
        ],
    },
];

export const topDealUsers = [
    {
        id: 1,
        img: "https://cdn.dribbble.com/users/4998148/screenshots/10770386/ironmandribbble_4x.jpg",
        fullName: "Tony Stark",
    },
    {
        id: 2,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aac39ffc-42e8-49fe-a1a1-9706baf7af0d/df95y6u-4d8dbbfc-36cb-4231-b3e9-706857b57734.png/v1/fill/w_894,h_894,q_70,strp/doctor_strange_icon_by_thelivingethan_df95y6u-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzI4OCIsInBhdGgiOiJcL2ZcL2FhYzM5ZmZjLTQyZTgtNDlmZS1hMWExLTk3MDZiYWY3YWYwZFwvZGY5NXk2dS00ZDhkYmJmYy0zNmNiLTQyMzEtYjNlOS03MDY4NTdiNTc3MzQucG5nIiwid2lkdGgiOiI8PTMyODgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Mya7eOq_qzhD9cagyf_PoQJZryNsHbpdddw-LwpfhrQ",
        fullName: "Stephen Strange"
    },
    {
        id: 3,
        img: "https://cdn.dribbble.com/users/2834942/screenshots/5585240/daredevil.dribbble_1x.png",
        fullName: "Matt Murdock",
    },
    {
        id: 4,
        img: "https://cdn3.iconfinder.com/data/icons/movies-4/48/green-lantern-superhero-character-movie-512.png",
        fullName: "Hal Jordan",
    },
    {
        id: 5,
        img: "https://cdn.dribbble.com/users/323571/screenshots/5412611/media/b4978c6d2001514413b2cd1fb29cacb8.jpg?resize=400x300&vertical=center",
        fullName: "Bruce Wayne",
    },
];

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/ArrowIcon.png",
    title: "Total Staff",
    number: "16",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 5 },
        { name: "Mon", users: 1 },
        { name: "Tue", users: 3 },
        { name: "Wed", users: 0 },
        { name: "Thu", users: 7 },
        { name: "Fri", users: 0 },
        { name: "Sat", users: 1 },
    ],
};

export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
        { name: "Sun", products: 400 },
        { name: "Mon", products: 600 },
        { name: "Tue", products: 500 },
        { name: "Wed", products: 700 },
        { name: "Thu", products: 400 },
        { name: "Fri", products: 500 },
        { name: "Sat", products: 450 },
    ],
};
export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 600 },
        { name: "Tue", revenue: 500 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 400 },
        { name: "Fri", revenue: 500 },
        { name: "Sat", revenue: 450 },
    ],
};
export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        { name: "Sun", ratio: 400 },
        { name: "Mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "Fri", ratio: 500 },
        { name: "Sat", ratio: 450 },
    ],
};

export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {
            name: "Sun",
            profit: 4000,
        },
        {
            name: "Mon",
            profit: 3000,
        },
        {
            name: "Tue",
            profit: 2000,
        },
        {
            name: "Wed",
            profit: 2780,
        },
        {
            name: "Thu",
            profit: 1890,
        },
        {
            name: "Fri",
            profit: 2390,
        },
        {
            name: "Sat",
            profit: 3490,
        },
    ],
};

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: 4000,
        },
        {
            name: "Mon",
            visit: 3000,
        },
        {
            name: "Tue",
            visit: 2000,
        },
        {
            name: "Wed",
            visit: 2780,
        },
        {
            name: "Thu",
            visit: 1890,
        },
        {
            name: "Fri",
            visit: 2390,
        },
        {
            name: "Sat",
            visit: 3490,
        },
    ],
};

export const userRows = [
    {
        id: 1,
        img: "https://cdn.dribbble.com/users/4998148/screenshots/10770386/ironmandribbble_4x.jpg",
        fullName: "Tony Stark",
        username: "tstark",
        location: "N/A",
        shift: "Day",
        role: "Admin",
        status: false,
    },
    {
        id: 2,
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aac39ffc-42e8-49fe-a1a1-9706baf7af0d/df95y6u-4d8dbbfc-36cb-4231-b3e9-706857b57734.png/v1/fill/w_894,h_894,q_70,strp/doctor_strange_icon_by_thelivingethan_df95y6u-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzI4OCIsInBhdGgiOiJcL2ZcL2FhYzM5ZmZjLTQyZTgtNDlmZS1hMWExLTk3MDZiYWY3YWYwZFwvZGY5NXk2dS00ZDhkYmJmYy0zNmNiLTQyMzEtYjNlOS03MDY4NTdiNTc3MzQucG5nIiwid2lkdGgiOiI8PTMyODgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Mya7eOq_qzhD9cagyf_PoQJZryNsHbpdddw-LwpfhrQ",
        fullName: "Stephen Strange",
        username: "sstrange",
        location: "NY",
        shift: "Day",
        role: "Admin",
        status: true,
    },
    {
        id: 3,
        img: "https://cdn.dribbble.com/users/323571/screenshots/5412611/media/b4978c6d2001514413b2cd1fb29cacb8.jpg?resize=400x300&vertical=center",
        fullName: "Bruce Wayne",
        username: "bwayne",
        location: "Gotham",
        shift: "Night",
        role: "Admin",
        status: false,
    },
    {
        id: 4,
        img: "data:image/png;base64,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",
        fullName: "Bruck Negash",
        username: "bnegash",
        location: "Arrow Tech",
        shift: "Day",
        role: "User",
        status: true,
    },
    {
        id: 5,
        img: "data:image/jpeg;base64,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",
        fullName: "Bruce Banner",
        username: "bbanner",
        location: "N/A",
        shift: "Day",
        role: "Admin",
        status: false,
    },
    {
        id: 6,
        img: "data:image/jpeg;base64,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",
        fullName: "Diana Prince",
        username: "dprince",
        location: "Themyscira",
        shift: "Day",
        role: "Admin",
        status: true,
    },
    {
        id: 7,
        img: "data:image/jpeg;base64,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",
        fullName: "Clark Kent",
        username: "ckent",
        location: "Metropolis",
        shift: "Day",
        role: "Admin",
        status: false,
    },
    {
        id: 8,
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAABO1BMVEX///84SlVJYW4kLzYYHyQ/U1/mqZfmuqVLZHIfKC4pNT1AVWEhKzI4S1YrOkMhOUbmsp8AAAAqQ1ExQUvtrptEWmYVGx+4ubo5V2cJHCUAAAbuwKrz9PUAICwVJzAAFh7m6erc4OLcsp7aoI+yjHsACxe/xsrs7/CQnaVwg408WWkvRlSiqq/S19qpfG/Ol4e3hnfo1tLTrJr2083BnIuzlYpiXGEjM0YZJDKpr7NgbXV+j5mYpay7wMQ8Rk2LlZtvdXpPX2hYUU9RTEsxMzUiIiRIOzpbSkeafnBnWFEyLi+NaF6Bal96W1N0ZmHGqp1okTiElFWzqHuwmm55kUHw+u0AjwDM3Lpvs1ZLpCnqx7YzmwBpU0/G4sD26OGrgHWx16mdhHkAJT4AGzLlvbKKgX9paGoAABV3fH+xP4KwAAAKk0lEQVR4nO2cfX/SyBaASUJ4SUiwCUnhAkmgAoUUqS21lhbpi7Zqa/fuvXe7e9XVW3Wr3/8T3JkJhAABkprupOk8f6gF9TdPzplzZiaBWIxAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQIjFKuZ+veTyeqNSqTTc/kF9X27f8Zj+LgyJb7XWJyxL9fUmnW+xkiT0BpMXprQumKIeFfeGxCopunVgv1Bvtlo0nUqlFBYgmGavb7+3YQqszJUNDOO8EyQWyKdaqQr6qZ9qQe/UyB1iChvoPePIZHmZ48puc+ReAu2APJ2vx2JtcA1sbHdgz8I3TfAniuO4Au4hB0YPysFY5/vreTrl6s6yUrMuwd+BOvcC95ADYyAAJR7KtpzmU+5g4sNfRaDOHOIecmD0zWHWT0PzPM/yExcAZjynbeAecmAYKJfZqZBTssikGU4WJuShOleISosDCOxoxg8RuEyGYZh0PK6qalp2xB65l3EPOED2hQl1gYHiljtEjcv8yF6I1nQHixnTMd1pcWhuuwP7tJ35YMJrq7gHHCSmVeYhPDPGdgdQQ3le5AqRWdlABsIo49nMHHdVtuR5IXOIe7iBUpHc1Cfcx/JahKo8pGnFXZlQn3SPq5SV9Ue4BxswPeROM8wC93h82OtwDzZYSnkUdnGJewa5SxXcww2UNtq8CZkl7taUN/vL/8N7RL/lkvGz7nEVLW8GuIcbKOtwusse3DkY+B7u4QYKLPP0dMa7uMdVuL5TcA83UGCZnw27mzsMvIl7uIFCu812N3fQ50Chxz3cQMm7FHl3d1UG7lFaz8P2Pt3b58Wd4aPlDuJOa4D0sv5eKBT06MWdP37z5vjkZUHT5rgX9Nqr0zOAzEuud6ruKcBdShYBya3Xb15qs2cXBf3t2XknkYOIkXMXkxbF6uPXx9rkmVVBPzt/AswTkBzHRyrnwXzXqskqBOgD+xPN4a6fWuZrkEQizUerx7VS5W73MaJbLYLYX4zOaeOq+g6ar20O6dQitrYBZf5y6/EvTwH//PVfKPYvNeSuv0Ix//ev/4Fvdjc75zWWxz3cQGkqGW2r+/hpLPbb1YcPV79vA/s3GnDXTzuJxPbv8EXw155ubibiKhWtvcw+n8mcFJH8H1dX/wWvvE8WLzNp9SyX+AZ++nB19QdQf9LJfdRVqol7uIFywGcY7QK0uE+x2J9/xmKfgPrOCxD3V5+B/KfYb/8DLz4Fyf+kBla10dq/9+H5bPkCNPjk++3t96DVdU/KaL7XTjdBb/u2vf0NtLfc6xooflJ07kRC2nlY1ssnW0VE9fqkbNf52tvzNbSoyXXOavAFqY57uIHSQO5Mpvzi8uLi8qQ8XNykVbSK12unH88v3p3WCujHrIF7uMEyOrTJwC1NBv5e1rgXL9++0mt6AeoD1OGGJmJn1LHmxP5N046vu9Vk8VEul+g8OdNrzs2cHq0yH4ttOM2Z6yqsesnkI7SAzyWevNId7pG6CwtoZ2318mWyONzYIHeon7gYh74crVsTAHO0cS1fj8zH7sB+cySviriHGjjN4ZlNeWes7nBP5DpD+doh7qEGTl+bjnr38dajDljAj+Q/W/L6Hu6hBk4jC5NeOx5HvdrtAve1ceQ/woKnlqN0aDOkB5O+vJV04sh5CHKP1ibOog6SXrschx2ubR/Blew48OdAXo/WTdghbJopd23z5M7ls5udj2fvNsf2a7UoVnnInpZ5aYf9evcL4CuE+WwH/qygR2sPZ8MXLobu1S9fdnepw95Rryc+f/61bCd9TcY9yDuib/f24g1wNyVpl+M44P5ulPWd75Gc7ZBe1a50z4D87u5zyNeP40oftUesxjTG3a2482wXTfjy2ea40ici2NtHfHLIF6vdnevP8D7UWP0p7gHeJdsTSxvQ3yfWNtu4h3e3vF+wrvuGe3B3zfviHPdc5NVj/b/c3XMX0TqddaOdP+oWZ9xznaNsxJ6edqGSp/M31eKEe27tUqKykTuqmsHI03RL+msLHVZC91yucymZFBW1U3kXoDutmNLNzhbaw659fgbNgXuE1zVDkDutUGA1z95c3rCSRFk8APcKcgfyANM0KZsHkPNDd0veyQNwbw/dZ+QfQJ233aflH0B/r9vuU/LZ6K/r9lq0u3w2arcgZzlwuNO8wz1iT5q40GjSc9zNw0g9STpDvZmn57lTcvYwslO+PWhNmk+5g9BnzUEEO51xQOcVepopdxR8ZSNSi9tSv5dvzYi7usOil+1F5pQeTHJX8XnusN9J+xFY6cBJPpvry9xh7rMHBu7B/wzGQWqBOICd627l/uo9bXtzJ7lXd1j3sz/uYdtbMMm9uyN9anCvpn573a2h3cqdstqegVvJG8bGkknu152y2l7op36p7ynX/bpTsO01Q5377f2ZVWtg7jD3hbCueBs+cv1W7kj/aC98ue+trv+sOwWnfsh2ewd5f7n+E+5otxeex06N1C1CPsddACzXzx6FZK9XWRpzZMTy/Ew5mHCH0rIsi4glF8CUDNzakNLy8CqKwrOsYF0B5wUYu0Nvy1oE/vLy0Ific6MD7wkPLgHyt/XZkbgVbujsLelBzVvHLT66t+gDBSaA4nAXUMRlK+m9k8Xf7A5uUeeUkT10F2QUcF/eKPD4z7RT/tWRPaVY7lDdvzgE+zOYvlN+BD+KOyXfyjwEN+zrt3Wnbffbgv0G3sZtlzU/7459wu/73b4E5479Y/K9BWbLL8tPuZu4P1W0YLorVADu4oJKmMWrvqjM88Jdu+Mt9O0F7mwA7sKiXQ3mJ3QWtTiBDcBdFue/ibnJLXBXhCBqnSzO39Nl8d6yXODuIeW91PkFEz68cRf4INwXJT1u91ZqzmbGS9g99Xf3wIP9roD5u2BWNZliFXr2Aihewu7FHQR+Wl5AW36OqeF9Km21wDCZDCMKypS94CXsnuIO2tzUKzKXjqtqPL6C3x19bU2GE2iHvjd1j2tap7xAicgb8o9wuEN9ZryGFTz0N+/uTnkurtpfiBIed2jPpnype3QXRvKC6DAPlzuwl5GRV3WvcbfkBSrjNA+bO8NwSor3rO55D4uKvTz1Rb6hc2cY1lN38+eOTjSn1cPnnhGXb2H8u4PGNvvd1Zjd+/qMu/eM93duMxv3Fbzrusb3mbB7z3hf7oKcmXHHfGdm4/tk1qeXH1TdMu6UOFHl1doK7nPamDFgdOdXq/uY7f7cJ+q8uqKH49mb/o1eGH0lo+jrzNrfs0aj9g5CfhKeD9cYG2INfU9ZWvaj7vOMmkHutZV0OEI+pv1D0zWf092fu8CpQLwWskeNhtR/FGre9m+3izu3snIT4ierN5qpO3quUsqavUF4xS0qe72814cMPbqb2ezRQaifKB1Tqg+UfMuDvwd3U8pKP1Zx32r3h9Hfp5fGf4m7DLx7eyEr6h4x6uu91qIEmO8OtLPK/ur99Lap9A+aIANabiXQzR1aS0eDvXbYC5tXGm1wBXpKHl4DRxo4PidlQuesxPYGe3UD93Dvgkal3d8YNHspupWHgAIOkQWl9wM4t42oxHohpVKp0TAqFcMwGqUHYUwgEAgEwt/H/wFUQzsshtKiZgAAAABJRU5ErkJggg==",
        fullName: "Selina Kyle",
        username: "skyle",
        location: "Gotham",
        shift: "Night",
        role: "User",
        status: true,
    },
    {
        id: 9,
        img: "data:image/jpeg;base64,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",
        fullName: "Peter Parker",
        username: "pparker",
        location: "New York",
        shift: "Day",
        role: "User",
        status: false,
    },
    {
        id: 10,
        img: "https://images.pexels.com/photos/2174912/pexels-photo-2174912.jpeg?auto=compress&cs=tinysrgb&w=1600",
        fullName: "Natasha Romanoff",
        username: "nromanoff",
        location: "Unknown",
        shift: "Day",
        role: "Admin",
        status: true,
    },
    {
        id: 11,
        img: "https://images.pexels.com/photos/876004/pexels-photo-876004.jpeg?auto=compress&cs=tinysrgb&w=1600",
        fullName: "Steve Rogers",
        username: "srogers",
        location: "Brooklyn",
        shift: "Day",
        role: "Admin",
        status: true,
    },
    {
        id: 12,
        img: "https://images.pexels.com/photos/1103084/pexels-photo-1103084.jpeg?auto=compress&cs=tinysrgb&w=1600",
        fullName: "Wanda Maximoff",
        username: "wmaximoff",
        location: "Sokovia",
        shift: "Night",
        role: "User",
        status: false,
    },
    {
        id: 13,
        img: "https://cdn3.iconfinder.com/data/icons/movies-4/48/green-lantern-superhero-character-movie-512.png",
        fullName: "Hal Jordan",
        username: "hjordan",
        location: "Coast City",
        shift: "Day",
        role: "Admin",
        status: true,
    },
    {
        id: 14,
        img: "https://images.pexels.com/photos/4128403/pexels-photo-4128403.jpeg?auto=compress&cs=tinysrgb&w=1600",
        fullName: "Ororo Munroe",
        username: "omunroe",
        location: "Kenya",
        shift: "Day",
        role: "Admin",
        status: false,
    },
    {
        id: 15,
        img: "https://cdn.dribbble.com/users/2834942/screenshots/5585240/daredevil.dribbble_1x.png",
        fullName: "Matt Murdock",
        username: "mmurdock",
        location: "Hell's Kitchen",
        shift: "Night",
        role: "User",
        status: true,
    },
];

export const products = [
    {
        id: 1,
        img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
        title: "Playstation 5 Digital Edition",
        color: "white",
        producer: "Sony",
        price: "$250.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 2,
        img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
        title: "Dell Laptop KR211822",
        color: "black",
        producer: "Dell",
        price: "$499.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 3,
        img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
        title: "Samsung TV 4K SmartTV",
        color: "gray",
        producer: "Samsung",
        price: "$999.49",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 4,
        img: "https://raylo.imgix.net/iphone-14-blue.png",
        title: "Apple Iphone 14 Pro Max",
        color: "white",
        producer: "Apple",
        price: "$799.49",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 5,
        img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
        title: "Philips Hue Play Gradient",
        color: "rainbow",
        producer: "Philips",
        price: "$39.99",
        createdAt: "01.02.2023",
    },
    {
        id: 6,
        img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
        title: "Logitech MX Master 3",
        color: "black",
        producer: "Logitech",
        price: "$59.49",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 7,
        img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
        title: "Rode Podcast Microphone",
        color: "gray",
        producer: "Rode",
        price: "$119.49",
        createdAt: "01.02.2023",
    },
    {
        id: 8,
        img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
        title: "Toshiba Split AC 2",
        color: "white",
        producer: "Toshiba",
        price: "$899.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 9,
        img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
        title: "Sony Bravia KDL-47W805A",
        color: "black",
        producer: "Sony",
        price: "$970.49",
        createdAt: "01.02.2023",
    },
    {
        id: 10,
        img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
        title: "Acer Laptop 16 KL-4804",
        color: "black",
        producer: "Acer",
        price: "$599.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
];



export const singleUser = {
    id: 1,
    title: "Bruck Negash",
    img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
        username: "bnegash",
        fullname: "Bruck Negash",
        email: "test@gmail.com",
        phone: "(714) 276-7958",
        status: "verified",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "clicks", color: "#8884d8" },
        ],
        data: [
            {
                name: "Sun",
                visits: 4000,
                clicks: 2400,
            },
            {
                name: "Mon",
                visits: 3000,
                clicks: 1398,
            },
            {
                name: "Tue",
                visits: 2000,
                clicks: 3800,
            },
            {
                name: "Wed",
                visits: 2780,
                clicks: 3908,
            },
            {
                name: "Thu",
                visits: 1890,
                clicks: 4800,
            },
            {
                name: "Fri",
                visits: 2390,
                clicks: 3800,
            },
            {
                name: "Sat",
                visits: 3490,
                clicks: 4300,
            },
        ],
    },
};
export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    info: {
        productId: "Ps5SDF1156d",
        color: "white",
        price: "$250.99",
        producer: "Sony",
        export: "Japan",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "orders", color: "#8884d8" },
        ],
        data: [
            {
                name: "Sun",
                visits: 4000,
                orders: 2400,
            },
            {
                name: "Mon",
                visits: 3000,
                orders: 1398,
            },
            {
                name: "Tue",
                visits: 2000,
                orders: 3800,
            },
            {
                name: "Wed",
                visits: 2780,
                orders: 3908,
            },
            {
                name: "Thu",
                visits: 1890,
                orders: 4800,
            },
            {
                name: "Fri",
                visits: 2390,
                orders: 3800,
            },
            {
                name: "Sat",
                visits: 3490,
                orders: 4300,
            },
        ],
    },
    activities: [
        {
            text: "John Doe purchased Playstation 5 Digital Edition",
            time: "3 day ago",
        },
        {
            text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
            time: "1 week ago",
        },
        {
            text: "Mike Doe purchased Playstation 5 Digital Edition",
            time: "2 weeks ago",
        },
        {
            text: "Anna Doe reviewed the product",
            time: "1 month ago",
        },
        {
            text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
            time: "1 month ago",
        },
        {
            text: "Helen Doe reviewed the product",
            time: "2 months ago",
        },
    ],
};
