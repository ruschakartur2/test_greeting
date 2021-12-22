import trafaret as t
import yaml


CONFIG_TRAFARET = t.Dict(
    {
        'host': t.IP,
        'port': t.Int(),
    }
)


def load_config(fname):
    with open(fname, 'rt') as f:
        data = yaml.safe_load(f)
    return CONFIG_TRAFARET.check(data)