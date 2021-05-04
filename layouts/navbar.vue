<template>
    <div id="allTheNav">
		<nav id="navigator" class="navbar" :class="{navbaropen: opened}">
		<span class="open-slide">
			<a href="#" @click="opened = !opened" class="side">
			<div>
				<div class="bar" :class="{topopen: opened}"></div>
				<div class="bar" :class="{midopen: opened}"></div>
				<div class="bar" :class="{botopen: opened}"></div>
			</div>
			</a>
		</span>
		<ul class="navbar-nav">
			<li><img src="images/logo.png"></li>
			<li><a href="/" class="menu">Home</a></li>
			<li><a href="/" class="menu">Menu</a></li>
			<!-- <li><a href="#" class="menu">Galery</a></li> -->
			<li><a href="/about" class="menu">About</a></li>
			<li class="cart"><a href="cart" class="menu"><span class="ti-shopping-cart"></span> {{ total.length }}</a></li>
		</ul>
		</nav>
		<div id="side-menu" class="side-nav" :class="{sidenavopen: opened}">
			<a href="/">Home</a>
			<a href="/">Menu</a>
			<a href="/cart">Cart</a>
			<a href="/about">About</a>
		</div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    data() {
        return {
            opened: false,
        }
    },
    computed: {
        ...mapState('cart', {
        total: (state) => state.productCart,
        }),
    },
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/style.sass';

.navbar {
	background-color: $purple;
	overflow: hidden;
	height: 63px;
    .open-slide {
        display: none;
        @media screen and (max-width: 780px) {
            display: block;
        }
    }
    img {
        float: left;
		display: block;
		text-align: center;
        width: 55px;
		padding: 5px 5px;
		&:hover {
			background-color: #ddd;
			color: #000;
		}
    }
	a {
		float: left;
		display: block;
		color: $white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
		&:hover {
			background-color: #ddd;
			color: #000;
		}

        .menu {
            @media screen and (max-width: 780px) {
                display: block;
            }
        }

	}
	ul {
		margin: 8px 0 0 0;
		list-style: none;

        li.cart {
            float: right !important;
    		padding-right: 25px;

        }
	}
}
.navbaropen {
	background-color: #3b5998;
	overflow: hidden;
	height: 63px;
	margin-left: 250px;
}
.side-nav {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: #111;
	opacity: 0.9;
	overflow-x: hidden;
	padding-top: 60px;
	transition: 0.3s;
	a {
		padding: 10px 10px 10px 30px;
		text-decoration: none;
		font-size: 22px; 
        color: #ccc;
		display: block;
		transition: 0.3s;
		&:hover {
			color: #fff;
		}
	}
	.btn-close {
		position: absolute;
		top: 0;
		right: 22px;
		font-size: 36px;
		margin-left: 50px;
	}
}
.sidenavopen {
	height: 100%;
	width: 250px;
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	background-color: #111;
	opacity: 0.9;
	overflow-x: hidden;
	padding-top: 60px;
	transition: 0.3s;
}
#main {
	transition: margin-left 0.3s;
	padding: 20px;
	overflow: hidden;
	width: 100%;
}
.mainopen {
	transition: margin-left 0.3s;
	padding: 20px;
	overflow: hidden;
	width: 100%;
	margin-left: 250px;
}
nav {
	transition: margin-left 0.3s;
}
.bar {
	display: block;
	height: 5px;
	width: 35px;
	background: #000;
	margin: 5px auto;
	transition: all .3s ease;
}
.midopen {
	width: 0;
}
.topopen {
	transform: translateY(10px) rotateZ(45deg);
}
.botopen {
	transform: translateY(-10px) rotateZ(-45deg);
}
</style>