import React from 'react'

const Index = () => {
    return (
    <div className='Header w-1/2'>
        <nav className='Nav'>
            <ul className='NavList'>
                <li><a href='/' className='text-3xl font-bold text-emerald-600'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/products'>Products</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default Index
