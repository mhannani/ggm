import dash
import dash_html_components as html
import music_component
import os
import flask

# serving local files
# css_directory = os.getcwd()
# stylesheets = ['app.scss']
# static_css_route = '/assets/'

app = dash.Dash(__name__)
app.title = 'ggm - gnaoua music'
i_list = [3023, 94, 69, 101, 125, 138, 141, 169, 263, 396, 478, 543, 735, 1011, 1185, 1200, 1254, 1472, 1563, 1638,
          1688, 1894, 1935, 2164, 2267, 2272, 2332, 2373, 2513, 2537, 2573, 2948, 2955, 2975, 2983, 3011, 3018]

audioList1 = [{
    "name": f"Gnaoua sample epoch - {i}{' - final 50 seconds' if i==3023 else ''}",
    "singer": 'waveGAN\'s music',
    "cover":
      'https://i.pinimg.com/736x/23/87/95/238795d126e72d3ef0fcb17500fd6753.jpg',
    "musicSrc":
      f"https://ggm.mhannani.codes/assets/generated_audios/epoch-{j}{'-final-50s' if i == 3023 else ''}.wav",
  } for i, j in zip(i_list, i_list)
]

app.layout = html.Div([
    html.Header(className='header', children=[
        html.Img(className="logo", src="./assets/logo/logo.svg"),
        html.Nav(className='nav', children=[
            html.Ul(children=[
                html.Li(children=[
                    html.A("Paper used", href="https://arxiv.org/pdf/1802.04208.pdf")
                ]),
                html.Li(children=[
                    html.A("Article", href="https://blog.mhannani.codes/ggm-under-the-hood")
                ]),
            ])
        ]),
    ]),
    music_component.MusicComponent(id="custom-component", audios=audioList1),
    html.A(
        className="github-fork-ribbon",
        href="https://github.com/mhannani/ggm",
        title="Fork me on GitHub",
        children="Fork me on GitHub"
    )
])


# @app.server.route('{}<stylesheet>'.format(static_css_route))
# def serve_stylesheet(style):
#     if style not in stylesheets:
#         raise Exception(
#             '"{}" is excluded from the allowed static files'.format(
#                 style
#             )
#         )
#     return flask.send_from_directory(css_directory, style)
#
#
# for stylesheet in stylesheets:
#     app.css.append_css({"external_url": "/assets/{}".format(stylesheet)})

if __name__ == '__main__':
    # for deployment
    app.run_server(host='0.0.0.0', port=8080, debug=False, use_reloader=False)

    # for production
    # app.run_server(debug=True)
