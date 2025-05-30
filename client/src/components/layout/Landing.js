import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large" data-test="landing-title">Aplicação Full Stack M.E.R.N.</h1>
                    <p className="lead" data-test="landing-subtitle">Muito alêm de Login, com cadastro, perfil, dashboard, gerenciamento de posts</p>
                    <div className="buttons">
                        <Link to="/cadastrar" className="btn btn-primary" data-test="landing-register">Cadastrar</Link>
                        <Link to="/login" className="btn btn-light" data-test="landing-login">Login</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
