import { Fragment, useState } from "react";
import useNavigation from '../hooks/use-navigation';

function CMDPage() {
    const { navigate } = useNavigation();
    const [commands, setCommands] = useState([]);
    const [currentCommand, setCurrentCommand] = useState('');

    const name = 'sandesh'

    const handleSubmit = (e) => {
        e.preventDefault();
        setCommands([...commands, currentCommand])
        setCurrentCommand('');
    };

    const handleChange = (e) => {
        setCurrentCommand(e.target.value);
    }

    const getCommandsInfo = (cmd) => {
        const cmdLower = cmd.toLowerCase();

        switch (cmdLower) {
            case 'help':
                return (
                    <ol>
                        <li>about</li>
                        <li>portfolio</li>
                        <li>clear</li>
                        <li>exit</li>
                    </ol>
                )
            case 'clear':
                return setCommands([]);
            case 'exit':
                return navigate('/');
            default:
                return (<p className="text-red-500">No such commands found!</p>)
        }
    }

    return (
        <div className="full">
            {
                commands.map((cmd, idx) => (
                    <Fragment key={idx} >
                        <div className="flex items-center gap-4 mb-1">
                            <span>${name}\cli\</span>
                            <span>{cmd}</span>
                        </div>
                        <div className="mb-5">{getCommandsInfo(cmd)}</div>
                    </Fragment>
                ))
            }

            <form onSubmit={handleSubmit} className="flex items-center gap-4">
                <span>${name}\cli\</span>
                <input
                    value={currentCommand}
                    onChange={handleChange}
                    type="text"
                    placeholder="Type 'help' for commands!"
                    className="focus:outline-none w-full"
                    required
                />
            </form>
        </div >
    );

}
export default CMDPage;