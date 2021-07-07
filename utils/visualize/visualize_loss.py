from matplotlib import pyplot as plt
import os


def visualize_loss(loss_1, loss_2, first_legend, second_legend, y_label):
    """
    Visualize the loss of the model after training the generative and the discriminative models
    :param loss_1: The training loss
    :param loss_2: The validation loss
    :param first_legend: the label of g_loss
    :param second_legend: the label of valid_g_loss
    :param y_label: the title of y-axis
    :return: None
    """
    # create a figure
    plt.figure(figsize=(10, 5))

    # supply a title
    plt.title("{} and {} Loss During Training".format(first_legend, second_legend))

    # plot the figure 1
    plt.plot(loss_1, label=first_legend)

    # plot the figure 2
    plt.plot(loss_2, label=second_legend)

    # the title of the axis 1
    plt.xlabel("iterations")

    # the title of the axis 2
    plt.ylabel(y_label)

    # create the grad
    plt.grid(True)

    # adjust the padding between the subplots
    plt.tight_layout()

    # add legend
    plt.legend()

    # show figure
    plt.show()

    # create visualization folder
    if not (os.path.isdir("visualization")):
        os.makedirs("visualization")

    # save the figure
    plt.savefig("visualization/loss.png")